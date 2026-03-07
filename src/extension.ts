import * as vscode from 'vscode';
import rawKnowledgeBase from './php_data.json';

// Define the exact structure of our parsed JSON data
interface FuncData {
    signature: string;
    description: string;
    url: string;
}

// Cast the imported JSON into a strongly-typed dictionary for sub-millisecond lookups
const phpKnowledgeBase: Record<string, FuncData> = rawKnowledgeBase as Record<string, FuncData>;

export function activate(context: vscode.ExtensionContext) {
    console.log('🌊 PHPOcean Code Intelligence is now active!');

    // ==========================================
    // 1. SECURITY LINTER (Diagnostics)
    // ==========================================
    const securityDiagnostics = vscode.languages.createDiagnosticCollection('owasp-sentinel');
    context.subscriptions.push(securityDiagnostics);

    // Scan currently active file
    if (vscode.window.activeTextEditor) {
        scanDocument(vscode.window.activeTextEditor.document, securityDiagnostics);
    }

    // Scan file when user types or deletes
    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(event => {
            scanDocument(event.document, securityDiagnostics);
        })
    );

    // Scan newly opened files
    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(document => {
            scanDocument(document, securityDiagnostics);
        })
    );

    // ==========================================
    // 2. HOVER PROVIDER
    // ==========================================
    const hoverProvider = vscode.languages.registerHoverProvider('php', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            if (!range) {
                return null;
            }
            
            const word = document.getText(range);
            const funcData = phpKnowledgeBase[word];
            
            if (funcData) {
                const markdown = new vscode.MarkdownString();
                markdown.appendCodeblock(funcData.signature, 'php');
                markdown.appendMarkdown(`\n\n${funcData.description}\n\n`);
                markdown.appendMarkdown(`[🌊 PHPOcean - Read more on php.net](${funcData.url})`);
                
                return new vscode.Hover(markdown);
            }
            return null;
        }
    });

    // ==========================================
    // 3. COMPLETION PROVIDER
    // ==========================================
    const completionProvider = vscode.languages.registerCompletionItemProvider('php', {
        provideCompletionItems(document, position, token, context) {
            const completionItems: vscode.CompletionItem[] = [];

            for (const [funcName, funcData] of Object.entries(phpKnowledgeBase)) {
                const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
                item.detail = funcData.signature;
                item.documentation = new vscode.MarkdownString(funcData.description);
                // Insert snippet format so the cursor lands inside the parentheses
                item.insertText = new vscode.SnippetString(`${funcName}($1)$0`);
                
                completionItems.push(item);
            }

            return completionItems;
        }
    });

    // Register Hover, Autocomplete, AND the new Quick Fix Lightbulb
    context.subscriptions.push(
        hoverProvider, 
        completionProvider,
        vscode.languages.registerCodeActionsProvider('php', new OwaspQuickFixProvider(), {
            providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
        })
    );
}

/**
 * The core scanning engine. 
 * This checks the document text against our OWASP security rules.
 */
function scanDocument(document: vscode.TextDocument, collection: vscode.DiagnosticCollection): void {
    if (document.languageId !== 'php') {
        return;
    }

    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();

    // --- RULE 1: INSECURE HASHING ALGORITHMS ---
    const insecureHashRegex = /\b(md5|sha1)\s*\(([^)]*)\)/g;
    let match: RegExpExecArray | null; // Explicitly typed for Strict Mode
    while ((match = insecureHashRegex.exec(text)) !== null) {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        const range = new vscode.Range(startPos, endPos);
        
        const diagnostic = new vscode.Diagnostic(
            range, 
            `🌊 PHPOcean - OWASP Warning: '${match[1]}' is cryptographically broken. Use 'password_hash()' for passwords or 'hash()' for data.`, 
            vscode.DiagnosticSeverity.Warning
        );
        diagnostic.code = "OWASP-A02:Cryptographic-Failures";
        diagnostics.push(diagnostic);
    }

    // --- RULE 2: SQL INJECTION RISKS ---
    //const sqlRegex = /["'][^"']*(?:SELECT|INSERT|UPDATE|DELETE)[^"']*\$(?!table\b|table[1-2]\b|columns\b|joinCondition\b)[a-zA-Z_][a-zA-Z0-9_]*[^"']*["']/gi;
    const sqlRegex = /["'][^"'\r\n]*(?:SELECT|INSERT|UPDATE|DELETE)[^"'\r\n]*\$(?!table\b|table[1-2]\b|columns\b|joinCondition\b)[a-zA-Z_][a-zA-Z0-9_]*[^"'\r\n]*["']/gi;
    let sqlMatch: RegExpExecArray | null; // Explicitly typed
    while ((sqlMatch = sqlRegex.exec(text)) !== null) {
        const startPos = document.positionAt(sqlMatch.index);
        const endPos = document.positionAt(sqlMatch.index + sqlMatch[0].length);
        const range = new vscode.Range(startPos, endPos);
        const diagnostic = new vscode.Diagnostic(range, `🌊 PHPOcean - OWASP Critical: Potential SQL Injection. Never interpolate data variables directly into SQL strings. Use PDO prepared statements.`, vscode.DiagnosticSeverity.Error);
        diagnostic.code = "OWASP-A03:Injection-SQL";
        diagnostics.push(diagnostic);
    }

    // --- RULE 3: SESSION HIJACKING RISKS ---
    const insecureSessionRegex = /\bsession_start\s*\(\s*\)/g;
    let sessionMatch: RegExpExecArray | null; // Explicitly typed
    
    // SAFETY CHECK: If the file already secures sessions via ini_set or session_set_cookie_params, stand down!
    const isSessionSecuredGlobally = text.includes("session.cookie_secure") || text.includes("session_set_cookie_params");

    while ((sessionMatch = insecureSessionRegex.exec(text)) !== null) {
        if (isSessionSecuredGlobally) {
            continue;
        }

        const startPos = document.positionAt(sessionMatch.index);
        const endPos = document.positionAt(sessionMatch.index + sessionMatch[0].length);
        const range = new vscode.Range(startPos, endPos);
        const diagnostic = new vscode.Diagnostic(range, `🌊 PHPOcean - OWASP Warning: Bare 'session_start()' detected. Ensure you configure strict cookies to prevent session hijacking.`, vscode.DiagnosticSeverity.Warning);
        diagnostic.code = "OWASP-A01:Broken-Access-Control";
        diagnostics.push(diagnostic);
    }

    // --- RULE 4: CROSS-SITE SCRIPTING (XSS) RISKS ---
    const xssRegex = /(?:\becho\b|\bprint\b|<\?=)[^;]*\$_(?:GET|POST|REQUEST|COOKIE|SERVER)[^;]*/gi;
    let xssMatch: RegExpExecArray | null; // Explicitly typed
    while ((xssMatch = xssRegex.exec(text)) !== null) {
        
        if (xssMatch[0].toLowerCase().includes('htmlspecialchars') || xssMatch[0].toLowerCase().includes('htmlentities')) {
            continue;
        }

        const startPos = document.positionAt(xssMatch.index);
        const endPos = document.positionAt(xssMatch.index + xssMatch[0].length);
        const range = new vscode.Range(startPos, endPos);
        const diagnostic = new vscode.Diagnostic(range, `🌊 PHPOcean - OWASP High: Potential Cross-Site Scripting (XSS). Never output user-controlled variables directly to the browser.`, vscode.DiagnosticSeverity.Error);
        diagnostic.code = "OWASP-A03:Injection-XSS";
        diagnostics.push(diagnostic);
    }

    // Push the warnings to the editor
    collection.set(document.uri, diagnostics);
}

// ==========================================
// 4. QUICK FIX PROVIDER (The Lightbulb)
// ==========================================
export class OwaspQuickFixProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];

        // Loop through all the warnings currently on the line the user clicked
        for (const diagnostic of context.diagnostics) {
            
            // We use String() here to safely cast the code and prevent TypeScript Union Type errors
            const diagnosticCode = String(diagnostic.code);

            // QUICK FIX 1: Fix Bare session_start()
            if (diagnosticCode === "OWASP-A01:Broken-Access-Control") {
                const fix = new vscode.CodeAction('🌊 PHPOcean - Apply PHPOcean Secure Session', vscode.CodeActionKind.QuickFix);
                fix.edit = new vscode.WorkspaceEdit();
                
                const secureSessionCode = `if (session_status() === PHP_SESSION_NONE) {\n    session_start([\n        'cookie_lifetime' => 3600,\n        'cookie_path' => '/',\n        'cookie_secure' => true,\n        'cookie_httponly' => true,\n        'cookie_samesite' => 'Strict'\n    ]);\n    session_regenerate_id(true);\n}`;
                
                fix.edit.replace(document.uri, diagnostic.range, secureSessionCode);
                fix.isPreferred = true;
                actions.push(fix);
            }

            // QUICK FIX 2: Fix XSS (Wrap in htmlspecialchars)
            if (diagnosticCode === "OWASP-A03:Injection-XSS") {
                const fix = new vscode.CodeAction('🌊 PHPOcean - Wrap with htmlspecialchars() (phpsanitize)', vscode.CodeActionKind.QuickFix);
                fix.edit = new vscode.WorkspaceEdit();
                
                const badCode = document.getText(diagnostic.range);
                const prefixRegex = /^\s*(echo\s+|print\s+|<\?=\s*)/i;
                
                let innerCode = badCode.replace(prefixRegex, '').trim();
                const hasSemicolon = innerCode.endsWith(';');
                if (hasSemicolon) {
                    innerCode = innerCode.slice(0, -1).trim(); 
                }

                const sanitizedCode = `htmlspecialchars(${innerCode}, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')${hasSemicolon ? ';' : ''}`;
                
                const prefixMatch = badCode.match(prefixRegex);
                const prefix = prefixMatch ? prefixMatch[0] : 'echo ';

                fix.edit.replace(document.uri, diagnostic.range, prefix + sanitizedCode);
                actions.push(fix);
            }

            // QUICK FIX 3: Fix md5() / sha1() Cryptographic Failures
            if (diagnosticCode === "OWASP-A02:Cryptographic-Failures") {
                const matchText = document.getText(diagnostic.range);

                const fixHash = new vscode.CodeAction("🌊 PHPOcean - Upgrade to SHA-256 hash()", vscode.CodeActionKind.QuickFix);
                fixHash.edit = new vscode.WorkspaceEdit();
                const replacementHash = matchText.replace(/\b(?:md5|sha1)\s*\(([^)]*)\)/i, "hash('sha256', $1)");
                fixHash.edit.replace(document.uri, diagnostic.range, replacementHash);
                actions.push(fixHash);

                const fixPassword = new vscode.CodeAction("🌊 PHPOcean - Upgrade to password_hash()", vscode.CodeActionKind.QuickFix);
                fixPassword.edit = new vscode.WorkspaceEdit();
                const replacementPassword = matchText.replace(/\b(?:md5|sha1)\s*\(([^)]*)\)/i, "password_hash($1, PASSWORD_BCRYPT)");
                fixPassword.edit.replace(document.uri, diagnostic.range, replacementPassword);
                fixPassword.isPreferred = true; 
                actions.push(fixPassword);
            }
        }

        return actions;
    }
}

export function deactivate() {}
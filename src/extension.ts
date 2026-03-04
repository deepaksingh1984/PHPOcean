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
    console.log('PHP Code Intelligence is now active!');

    // 1. HOVER PROVIDER (Triggers when the user hovers over a word)
    const hoverProvider = vscode.languages.registerHoverProvider('php', {
        provideHover(document, position, token) {
            // Get the word the cursor is currently hovering over
            const range = document.getWordRangeAtPosition(position);
            
            // Safety check in case the cursor isn't over a word
            if (!range) {
                return null;
            }
            
            const word = document.getText(range);
            const funcData = phpKnowledgeBase[word];
            
            if (funcData) {
                // Build a Markdown payload for the hover tooltip
                const markdown = new vscode.MarkdownString();
                markdown.appendCodeblock(funcData.signature, 'php');
                markdown.appendMarkdown(`\n\n${funcData.description}\n\n`);
                markdown.appendMarkdown(`[Read more on php.net](${funcData.url})`);
                
                return new vscode.Hover(markdown);
            }
            return null;
        }
    });

    // 2. COMPLETION PROVIDER (Triggers as the user types)
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

    context.subscriptions.push(hoverProvider, completionProvider);
}

export function deactivate() {}
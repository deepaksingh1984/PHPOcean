const axios = require('axios');
const fs = require('fs');
const path = require('path');

// The expanded list of JetBrains PHP Stubs
const STUB_URLS = [
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/standard/standard_1.php',
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/standard/standard_2.php',
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/standard/standard_3.php',
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/PDO/PDO.php',
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/mysqli/mysqli.php',
    'https://raw.githubusercontent.com/JetBrains/phpstorm-stubs/master/curl/curl.php'
];

const OUTPUT_FILE = path.join(__dirname, 'src', 'php_data.json');

async function buildKnowledgeBase() {
    console.log('Fetching extended PHP stubs from JetBrains...');
    const knowledgeBase = {};

    // Updated Regex to capture visibility keywords (public/protected) and static methods
    const regex = /\/\*\*([\s\S]*?)\*\/\s*(?:#[^\n]*\n)*\s*(?:(?:public|private|protected)\s+)?(?:static\s+)?function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/g;

    for (const url of STUB_URLS) {
        console.log(`Downloading and parsing: ${url.split('/').pop()}...`);
        try {
            const response = await axios.get(url);
            const code = response.data;

            let match;
            while ((match = regex.exec(code)) !== null) {
                const rawDoc = match[1];
                const funcName = match[2];
                const rawParams = match[3];

                // Skip magic methods (like __construct) to keep the autocomplete clean
                if (funcName.startsWith('__')) continue;

                // Clean up the DocBlock description
                const descriptionMatch = rawDoc.match(/\*\s+([^@]+)/);
                let description = descriptionMatch ? descriptionMatch[1].replace(/\n\s*\*\s*/g, ' ').trim() : 'No description available.';
                
                // Format the signature
                const cleanParams = rawParams.replace(/\s+/g, ' ').trim();
                const signature = `${funcName}(${cleanParams})`;
                
                // Generate the php.net URL
                const urlName = funcName.replace(/_/g, '-');
                const phpUrl = `https://www.php.net/manual/en/function.${urlName}.php`;

                // Add to database if it doesn't already exist
                if (!knowledgeBase[funcName]) {
                    knowledgeBase[funcName] = {
                        signature: signature,
                        description: description,
                        url: phpUrl
                    };
                }
            }
        } catch (error) {
            console.error(`Error processing ${url}:`, error.message);
        }
    }

    const funcCount = Object.keys(knowledgeBase).length;
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(knowledgeBase, null, 4));
    console.log(`\nSuccess! Extracted ${funcCount} functions/methods to src/php_data.json`);
}

buildKnowledgeBase();
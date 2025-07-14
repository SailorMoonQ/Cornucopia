import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser
        }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: { version: 'detect' }
        },
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // Node.js builtins. You could also generate this regex if you use a `.js` config.
                        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                        // Note that if you use the `node:` prefix for Node.js builtins,
                        // you can avoid this complexity: You can simply use "^node:".
                        [
                            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
                        ],
                        // Packages. `react` related packages come first.
                        ['^react', '^@?\\w'],
                        // Internal packages.
                        ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
                        // Side effect imports.
                        ['^\\u0000'],
                        // Parent imports. Put `..` last.
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        // Other relative imports. Put same-folder imports and `.` last.
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        // Style imports.
                        ['^.+\\.s?css$']
                    ]
                }
            ]
        }
    }
]);

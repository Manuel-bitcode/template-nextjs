import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@next/next/no-html-link-for-pages': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['error'],
      'prettier/prettier': ['error', { singleQuote: true, semi: false }]
    }
  }
];

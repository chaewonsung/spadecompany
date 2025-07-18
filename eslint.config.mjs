import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['src/**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, process: 'readonly' } },
  },
  pluginReact.configs.flat.recommended,
  { files: ['**/*.jsx'], rules: { 'react/prop-types': 'off' } },
]);

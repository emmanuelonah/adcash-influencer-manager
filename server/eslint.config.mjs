import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['**/public/'] },
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            semi: 'off',
            eqeqeq: 'off',
            'no-empty': 'error',
            'no-undef': 'off',
            'no-redeclare': 'off',
            'valid-typeof': 'off',
            'getter-return': 'off',
            'no-cond-assign': 'off',
            'no-fallthrough': 'off',
            'no-func-assign': 'off',
            'react/prop-types': 'off',
            'no-sparse-arrays': 'off',
            'no-useless-escape': 'off',
            'no-control-regex': 'off',
            'no-unsafe-finally': 'off',
            'react/display-name': 'off',
            'no-case-declarations': 'off',
            'no-prototype-builtins': 'off',
            'no-async-promise-executor': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-constant-binary-expression': 'off',
            'no-misleading-character-class': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'import/no-anonymous-default-export': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
];

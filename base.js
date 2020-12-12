const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;
const typescriptImports = require('eslint-plugin-import').configs.typescript;
const prettierTypescriptOverrides = require('eslint-config-prettier/@typescript-eslint');

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { consistent: true }],
    'linebreak-style': 'off',
    'no-mixed-spaces-and-tabs': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-prototype-builtins': 'off',
    'function-paren-newline': 'off', // conflict with prettier
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    complexity: ['error', 11],
    'handle-callback-err': 'error',
    'class-methods-use-this': 'off',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'max-classes-per-file': ['error', 1],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-plusplus': 'off',
    'no-async-promise-executor': 'warn'
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: false
      },
      plugins: ['@typescript-eslint'],
      ...typescriptImports,
      rules: Object.assign(typescriptEslintRecommended.rules, prettierTypescriptOverrides.rules, {
        'no-empty-function': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I']
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            // this allows for just `T`, which is common in generics
            custom: {
              regex: '^T([A-Z][a-z]*)*$',
              match: true
            }
          }
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              String: {
                message: 'Avoid using the `String` type. Did you mean `string`?',
                fixWith: 'string'
              },
              Object: {
                message: 'Avoid using the `Object` type. Did you mean `object`?'
              },
              Boolean: {
                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
              },
              Number: {
                message: 'Avoid using the `Number` type. Did you mean `number`?'
              },
              Symbol: {
                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
              }
            },
            extendDefaults: false
          }
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // consider extending on a per project basis
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: true
          }
        ],
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true
          }
        ],
        // the below rules are being evaluated and will either be turned off or allowed through
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // due to an update with eslint-plugin-import, we need this rule now for typescript
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ]
      })
    }
  ]
};

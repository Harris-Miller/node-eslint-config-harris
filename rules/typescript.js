'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true // there is no real reason to have this off, might as well keep on so if you are in tsx files you're safe
    }
  },
  plugins: [
    '@typescript-eslint/'
  ],
  rules: {
    // Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays (array-type from TSLint)
    '@typescript-eslint/array-type': ['error', 'array'], // TODO: still TDB which I actually want, array or generic

    // Enforces that types will not to be used (ban-types from TSLint)
    '@typescript-eslint/ban-types': ['error'], // TODO: useless until filled out

    // Bans “// @ts-ignore” comments from being used (ban-ts-ignore from TSLint)
    '@typescript-eslint/ban-ts-ignore': 'error',

    // Enforce camelCase naming convention
    camelcase: 'off', // MUST DISABLE BASE RULE FIRST!
    '@typescript-eslint/camelcase': 'error',

    // Require PascalCased class and interface names (class-name from TSLint)
    '@typescript-eslint/class-name-casing': 'error',

    // Require explicit return types on functions and class methods
    // this requires a return on void methods, so no, it's being turned off, TODO: test this
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

    // Require explicit accessibility modifiers on class properties and methods (member-access from TSLint)
    '@typescript-eslint/explicit-member-accessibility': 'warn',

    // Enforces naming of generic type variables
    '@typescript-eslint/generic-type-naming': ['warn', '^T[A-Z][a-zA-Z]+$'],

    // Enforce consistent indentation (indent from TSLint)
    indent: 'off', // MUST DISABLE BASE RULE FIRST!
    // then implement the TS version, though the resules are actually the exact same as the base rule
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],

    // Require that interface names be prefixed with I (interface-name from TSLint)
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],

    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 'error',

    // Enforces naming conventions for class members by visibility.
    // I don't care to have _ prepend for private class members, so I'm turning this off
    '@typescript-eslint/member-naming': 'off',

    // Require a consistent member declaration order (member-ordering from TSLint)
    // TODO: need to investigate the hell out of this one. using default as a warn for the time being
    '@typescript-eslint/member-ordering': 'warn',

    // Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion from TSLint)
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow the declaration of empty interfaces (no-empty-interface from TSLint)
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],

    // Disallow usage of the any type (no-any from TSLint)
    // in a perfect world, yes, but this is still javascript, ain't gonna happen
    '@typescript-eslint/no-explicit-any': 'warn',

    // Forbids the use of classes as namespaces (no-unnecessary-class from TSLint)
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow iterating over an array with a for-in loop (no-for-in-array from TSLint)
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
    // setting this warn, I want to know about it, but not prevent it from running
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Enforce valid definition of new and constructor. (no-misused-new from TSLint)
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow the use of custom TypeScript modules and namespaces (no-namespace from TSLint)
    '@typescript-eslint/no-namespace': 'error',

    // Disallows non-null assertions using the ! postfix operator (no-non-null-assertion from TSLint)
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion from TSLint)
    '@typescript-eslint/no-object-literal-type-assertion': 'error',

    // Disallow the use of parameter properties in class constructors. (no-parameter-properties from TSLint)
    // the benefits of parameter properties outweight cost, this rule is off
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallows invocation of require() (no-require-imports from TSLint)
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this (no-this-assignment from TSLint)
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow /// <reference path="" /> comments (no-reference from TSLint)
    '@typescript-eslint/no-triple-slash-reference': 'error',

    // Disallow the use of type aliases (interface-over-type-literal from TSLint)
    // needs to be looked into, unsure about the benefits. setting as a warn for now
    '@typescript-eslint/no-type-alias': 'warn',

    // Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion from TSLint)
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallow unused variables (no-unused-variable from TSLint)
    'no-unsed-vars': 'off', // TURN OFF BASE RULE, new rules are same as base
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off', // TURN OFF BASE RULE, new rule is same as base, with added typedefs
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true,
      typedefs: true
    }],

    // Disallow unnecessary constructors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallows the use of require statements except in import statements (no-var-requires from TSLint)
    '@typescript-eslint/no-var-requires': 'error',

    // Use function types instead of interfaces with call signatures (callable-types from TSLint)
    '@typescript-eslint/prefer-function-type': 'error',

    // Prefer an interface declaration over a type literal (type T = { ... }) (interface-over-type-literal from TSLint)
    '@typescript-eslint/prefer-interface': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules. (no-internal-module from TSLint)
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Requires any function or method that returns a Promise to be marked async. (promise-function-async from TSLint)
    // warning for now, need to look more into this one
    '@typescript-eslint/promise-function-async': 'warning',

    // When adding two variables, operands must both be of type number or of type string. (restrict-plus-operands from TSLint)
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Require consistent spacing around type annotations (typedef-whitespace from TSLint)
    // TODO: probably need to look into the defaults and see what's what
    '@typescript-eslint/type-annotation-spacing': 'error'
  }
};

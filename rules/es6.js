'use strict';

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 7
  },
  plugins: [
    'babel'
  ],
  rules: {
    // enforces no braces where they can be omitted
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],

    // require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false
    }],

    // require space before/after arrow function's arrow
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: true }],

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate name in class members
    'no-dupe-class-members': 'error',

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // disallow symbol constructor
    'no-new-symbol': 'error',

    // disallow specific globals
    'no-restricted-globals': 'off',

    // disallow specific imports
    'no-restricted-imports': 'off',

    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: false,
        object: true
      }
    }, {
      enforceForRenamedProperties: false
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off', // bad for transpilers

    // use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],

    // require a Symbol description
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    'template-curly-spacing': 'error',
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after'],

    //
    // for babel rules, we need to disable the original rules first, as babel "replaces" them with enhanced parcing
    //

    // ignores capitalized decorators
    'new-cap': 'off',
    'babel/new-cap': ['error', { newIsCap: true }],

    // doesn't complain about export x from "mod"; or export * as x from "mod";
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'always'],

    // doesn't fail when inside class properties
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',

    // includes class properties
    semi: 'off',
    'babel/semi': ['error', 'always']
  }
};

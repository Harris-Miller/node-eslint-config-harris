'use strict';

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'babel'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': [
      '.js'
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },
  rules: {
    // enforces no braces where they can be omitted
    'arrow-body-style': [0, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // require space before/after arrow function's arrow
    'arrow-spacing': [2, { before: true, after: true }],
    // verify super() callings in constructors
    'constructor-super': 2,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 2,
    // disallow modifying variables of class declarations
    'no-class-assign': 2,
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [2, { allowParens: false }],
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow symbol constructor
    'no-new-symbol': 2,
    // disallow specific globals
    'no-restricted-globals': 0,
    // disallow specific imports
    'no-restricted-imports': 0,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // require let or const instead of var
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': [2, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 1, // TODO: decide if 0 or 2
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0, // bad for transpilers
    // use rest parameters instead of arguments
    'prefer-rest-params': 0, // TODO: only until servers update to Node v5
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 0, // TODO: only until servers update to Node v5
    // suggest using template literals instead of string concatenation
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 2,
    // enforce usage of spacing in template strings
    'template-curly-spacing': [2, 'never'],
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': [2, 'after'],

    // ignores capitalized decorators
    'babel/new-cap': [2, { newIsCap: true }],
    // doesn't complain about export x from "mod"; or export * as x from "mod";
    'babel/object-curly-spacing': [2, 'always'],
    // doesn't fail when inside class properties
    'babel/no-invalid-this': 2,
    // includes class properties
    'babel/semi': [2, 'always']
  }
};

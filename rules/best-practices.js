'use strict';

module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 'error',

    // enforces return statements in callbacks of array's methods
    'array-callback-return': 'error',

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // enforce that class methods use "this"
    'class-methods-use-this': 'off',

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // require return statements to either always or never specify values
    // it's common to return an error object to stop code progression
    // even when the block doesn't return anything, this rule is just annoying
    'consistent-return': 'off',

    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // require default case in switch statements
    'default-case': 'error',

    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }], // F'error' mixes this too much to have on

    // require the use of === and !==
    eqeqeq: 'error',

    // make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Blacklist certain identifiers to prevent them being used
    'no-alert': 'error',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // disallow else after a return in an if
    'no-else-return': 'error',

    // disallow use of empty functions
    'no-empty-function': ['warning', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],

    // disallow use of empty destructuring patterns
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'error',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    'no-extend-native': 'off',

    // disallow unnecessary function binding
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    'no-global-assign': ['error', { exceptions: [] }],

    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'off',

    // disallow var and named functions in global scope
    'no-implicit-globals': 'error',

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',

    // disallow usage of __iterator__ property
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    'no-loop-func': 'error',

    // disallow the use of magic numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false
    }],

    // disallow use of multiline strings
    'no-multi-str': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // disallow use of new operator for Function object
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \'error'51';
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // function params should generally be treated as immutable. however, may frameworks expect you to change props on params (thing req and res for express)
    'no-param-reassign': ['error', { props: false }],

    // disallow usage of __proto__ property
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.'
    }],

    // allow use of assignment in return statement
    'no-return-assign': 'error',

    // disallow redundant `return await`
    'no-return-await': 'error',

    // disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // disallow unnecessary catch clauses
    'no-useless-catch': 'error',

    // disallow useless string concatenation
    'no-useless-concat': 'error',

    // disallow redundant return; keywords
    'no-useless-return': 'error',

    // disallow use of void operator
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 'error',

    // enforce using named capture group in regular expression
    // to new of a feature, not worth the headache of turning on
    'prefer-named-capture-group': 'off',

    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // require use of the second argument for parseInt()
    radix: 'error',

    // disallow async functions which have no await expression
    // should be off, async should be used on something that will return a funtion returning a promise that you wouldn't want to 'await' on
    'require-await': 'off',

    // enforce the use of u flag on RegExp
    'require-unicode-regexp': 'off',

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',

    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    yoda: 'error',

    // require effective use of strict mode directives
    // when using 'import', this will be overwritten as they aren't needed with es6module files
    strict: ['error', 'global']
  }
};

'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    // enforce return after a callback
    'callback-return': 0,
    // enforce require() on top-level module scope
    'global-require': 0,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': [2, '^(err|error)$'],
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [0, false],
    // disallow use of new operator with the require function
    'no-new-require': 0,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow use of process.env
    'no-process-env': 0,
    // disallow process.exit()
    'no-process-exit': 0,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods (off by default)
    'no-sync': 0,

    // require effective use of strict mode directives
    // TODO: go over this! node projects should all have 'use strict', however what if we are transpiling?
    strict: [2, 'global'],

    // overrides
    // allow use of console for service-side code
    'no-console': 0
  }
};

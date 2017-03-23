# eslint-config-harris

This package provides my personal set of eslint rules as a set of extensible shared configs

## Usage

We export multiple ESLint configurations for your usage.
Environment and parser options are only set where noted, please remember set yours based on the need of your project (e.g., `jquery` or `mocha` for your environment)

## Recommended Configs

### eslint-config-harris/node-recommended

This export bundles the default, node, and es6 features together. Recommended for node 6+ applications, where you're not Babel

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": "eslint-config-harris/node-recommended" to your .eslintrc

### eslint-config-harris/react-recommended

This export bundles all the individual configs and is designed for babel-transpiled React applications

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": "eslint-config-harris/react-recommended" to your .eslintrc

## Individual Configs

### eslint-config-harris

The default export contains all ESLint rules for ES5.

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": "eslint-config-harris" to your .eslintrc

### eslint-config-harris/browser

Adds Browser support and environmental variables
This config will add all browser globals, e.g. `window`, `document`, etc., as well as `jQuery` and `$`

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris", "eslint-config-harris/browser"]` to your .eslintrc

### eslint-config-harris/es6

Lints ES6. Recommended to always be used in conjunction with the default. Includes experimental Babel features
This config will add `es6` to eslint's environments option, and the ecmaVersion to `6` under parserOptions

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris", "eslint-config-harris/es6"]` to your .eslintrc

### eslint-config-harris/node

Adds Node support and rules for Node specific javascript
This config will add `node` to eslint's environments option

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris", "eslint-config-harris/node"]` to your .eslintrc

### eslint-config-harris/import

Adds support for es6 modules (import, export). Purposely seperate from es6 because current versions of Node support almost all es6 features except modules

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris", "eslint-config-harris/import"]` to your .eslintrc

### eslint-config-harris/react

Adds support for React and JSX syntax. It does NOT defaultly add es6 features however, that needs to be added separately

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris", "eslint-config-harris/react"]` to your .eslintrc

## Note for use with test frameworks

First, put a separate .eslintrc.json file in your tests folder with
```
{
	"env": {
		"mocha": true // or qunit, or jasmine, etc...
	}
}
```
This will turn on mocha global variables (`describe`, `it`, etc..). ESLint also has an `env` setting for jasmine, qunit, and a few others. See their website for more in.

Specifically for Chai, if you are using their should/expect API, you would typically write an assertion like so: `expect(foo).to.be.true`. Doing so will get your the ESLint error `no-unsed-expressions`. You will be tempted to turn this rule off, I suggest you don't. Instead, look into using [dirty-chai](https://github.com/prodatakey/dirty-chai). It's an npm that allows you to write the same assertion as `expect(foo).to.be.true()`. The reason being, that it is easy to get a false positive assertion if you mis-spell the final key, eg `expect(foo).to.be.tue`. `.tue` would just be undefined, and thus regardless if `foo` is true or not, nothing would happen. By evaluating it via `()` you will catch this up front. This is literally why the rule `no-unsed-expressions` exists, and why it should stay active in your test files


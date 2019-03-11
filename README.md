# eslint-config-harris

This package provides my personal set of eslint rules as a set of extensible shared configs

## Usage

We export multiple ESLint configurations for your usage.
Environment and parser options are only set where noted, please remember set yours based on the need of your project (e.g., `jquery` or `mocha` for your environment)

## Recommended Configs

### eslint-config-harris/web

This export bundles the default, and es6 features together with web globals. Intended for Babel projects to be compiled down to es5 for web. This includes react and import statements.

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": "eslint-config-harris/web" to your .eslintrc`

### eslint-config-harris/node

This export bundles the default, node, and es6 features together. This does not include es6 imports. If you are using babel on your BE, add the import config below.

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": "eslint-config-harris/node" to your .eslintrc`

### eslint-config-harris/import

Adds support for es6 modules (import, export). Purposely seperate from es6 because current versions of Node support almost all es6 features except modules.
(Note: this will only work if web or node is also included in your eslintrc extends)

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris/node", "eslint-config-harris/import"]` to your .eslintrc`

### eslint-config-harris/filenames

Adds support for linting the filenames and the name of the variables exported by the file.
(Note: this will only work if web or node is also included in your eslintrc extends)

1. `npm install --save-dev eslint-config-harris`
2. add `"extends: "["eslint-config-harris/node", "eslint-config-harris/filenames"]`

### eslint-config-harris/typescript

Adds support for linting typescript files. ts and tsx files are supported.
(Note: this will only work if web or node is also included in your eslintrc extends)

1. `npm install --save-dev eslint-config-harris`
2. add `"extends": ["eslint-config-harris/node", "eslint-config-harris/typescript"]` to your .eslintrc`

## no-console

Allowing or denying no-console is debated fiercly. With the exception of specific circumstances, I don't think console.logs should be used in the final code of any web app. For a node app however, it completely depends on what you're building. Obviously, you might want to console.log for, well, logging purpposes for say a web server to watch while developing. And you'd obviously want to use it if you're writing a CLI program. For this set of lint rules, I've choosen the lowest comment denominator and am keeping no-console as a 'warning'. I think it's best to override it for use on a case-by-case basis and will leave it up to the user to decide. By default however, no-console is turned off in the test-modifications rule set, as described below.

## Using with test frameworks

For your specific test framwork, in your test/.eslintrc file add
```
{
	"env": {
		"mocha": true // or qunit, or jasmine, etc...
	}
}
```
This will turn on mocha global variables (`describe`, `it`, etc..). ESLint also has an `env` setting for jasmine, qunit, and a few others. See their website for more in. You'll probably need to add some globals as well.

Specifically for Chai, if you are using their should/expect API, you would typically write an assertion like so: `expect(foo).to.be.true`. Doing so will get you the ESLint error `no-unsed-expressions`. You will be tempted to turn this rule off, I suggest you don't. Instead, look into using [dirty-chai](https://github.com/prodatakey/dirty-chai). It's an npm that allows you to write the same assertion as `expect(foo).to.be.true()`. The reason being, that it is easy to get a false positive assertion if you mis-spell the final key, eg `expect(foo).to.be.tue`. `.tue` would just be undefined, and thus regardless if `foo` is true or not, nothing would happen. By evaluating it via `()` you will catch this up front. This is literally why the rule `no-unsed-expressions` exists, and why it should stay active in your test files

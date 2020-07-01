# eslint-plugin-nkgrnkgr-react

[![npm version](https://img.shields.io/npm/v/eslint-plugin-nkgrnkgr-react.svg)](https://www.npmjs.com/package/eslint-plugin-nkgrnkgr-react)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-nkgrnkgr-react.svg)](http://www.npmtrends.com/eslint-plugin-nkgrnkgr-react)

A template for ESLint plugins.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
$ npm install --save-dev eslint eslint-plugin-nkgrnkgr-react
```

### Requirements

- Node.js v8.10.0 or newer versions.
- ESLint v5.16.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.yml`.

```yml
plugins:
  - nkgrnkgr-react
rules:
  nkgrnkgr-react/example-rule: error
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `nkgrnkgr-react/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->
### Stylistic Issues

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [nkgrnkgr-react/enable-only-default-import-react](./docs/rules/enable-only-default-import-react.md) | An example rule. | ⭐️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

### Development Tools 
- `npm test` runs tests and measures coverage.
- `npm version <TYPE>` updates the package version. And it updates `lib/configs/recommended.js`, `lib/index.js`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.

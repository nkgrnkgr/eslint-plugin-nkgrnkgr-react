# nkgrnkgr-react/no-importspecifiers-in-react

## Rule Details

This rule aimed at disallowing `import specifiers in React` identifiers.

Examples of **incorrect** code:

```js
/*eslint template/example-rule: error */

import React, { useEffect } from 'react';
```

Examples of **correct** code:

```js
/*eslint template/example-rule: error */

import React from 'react';
```

## Options

Nothing.

## Implementation

- [Rule source](../../lib/rules/no-importspecifiers-in-react.js)
- [Test source](../../tests/lib/rules/example-rule.js)

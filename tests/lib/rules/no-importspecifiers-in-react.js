"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/no-importspecifiers-in-react");

const ruleTester = new RuleTester({
    parser: "@typescript-eslint/parser"
});

ruleTester.run("no-importspecifiers-in-react", rule, {
    valid: [
        "import React from 'react'"
    ],
    invalid: [
        {
            code: "import React, { useEffect } from 'react",
            errors: ["Cannot use ImportSpecifier in React."]
        }
    ]
});

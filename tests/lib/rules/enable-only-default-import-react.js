"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/enable-only-default-import-react");

new RuleTester().run("enable-only-default-import-react", rule, {
    valid: [],
    invalid: []
});

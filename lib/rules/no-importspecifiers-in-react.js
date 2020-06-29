"use strict";

module.exports = {
    meta: {
        docs: {
            description: "No importspecifiers in react",
            category: "Stylistic Issues",
            recommended: true,
            url: "https://github.com/mysticatea/eslint-plugin-nkgrnkgr-react/blob/master/docs/rules/no-importspecifiers-in-react.md"
        },
        fixable: null,
        messages: {
            disallowExample: "Cannot use ImportSpecifier in React."
        },
        schema: [],
        type: "suggestion"
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === "react") {
                    for (const item of node.specifiers) {
                        if (item.type === "ImportSpecifier") {
                            context.report({
                                node,
                                message: "Cannot use ImportSpecifier in React."
                            });
                        }
                    }
                }
            }
        };
    }
};

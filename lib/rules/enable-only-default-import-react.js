"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Enable Only Default Import in React",
            category: "Possible Errors",
            recommended: false,
            url: ""
        },
        fixable: null,
        messages: {},
        schema: [],
        type: "problem"
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

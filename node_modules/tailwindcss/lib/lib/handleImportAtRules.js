"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleImportAtRules", {
    enumerable: true,
    get: function() {
        return handleImportAtRules;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(require("postcss"));
const _postcssimport = /*#__PURE__*/ _interop_require_default(require("postcss-import"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TAILWIND = Symbol();
function handleImportAtRules() {
    let RESTORE_ATRULE_COMMENT = '__TAILWIND_RESTORE__';
    let atRulesToRestore = [
        'tailwind',
        'config'
    ];
    return [
        (root)=>{
            root.walkAtRules((rule)=>{
                if (!atRulesToRestore.includes(rule.name)) return rule;
                rule.after(_postcss.default.comment({
                    text: RESTORE_ATRULE_COMMENT,
                    raws: {
                        [TAILWIND]: {
                            rule
                        }
                    }
                }));
                rule.remove();
            });
        },
        (0, _postcssimport.default)(),
        (root)=>{
            root.walkComments((rule)=>{
                if (rule.text === RESTORE_ATRULE_COMMENT) {
                    rule.after(rule.raws[TAILWIND].rule);
                    rule.remove();
                }
            });
        }
    ];
}

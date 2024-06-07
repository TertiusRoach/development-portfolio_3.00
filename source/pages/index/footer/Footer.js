"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_footer_1 = __importDefault(require("./default-footer/default-footer"));
var Footer = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Footer.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-footer':
            return (0, default_footer_1.default)(pageName, blockName);
        case 'default-footer':
        // return defaultFooter(pageName, blockName);
    }
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map
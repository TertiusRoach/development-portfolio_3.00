"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_header_1 = __importDefault(require("./default-header/default-header"));
var Header = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Header.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-header':
            return (0, default_header_1.default)(pageName, blockName);
        case 'default-header':
        // return defaultHeader(pageName, blockName);
    }
};
exports.default = Header;
//# sourceMappingURL=Header.js.map
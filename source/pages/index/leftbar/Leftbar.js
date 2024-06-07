"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_leftbar_1 = __importDefault(require("./default-leftbar/default-leftbar"));
var Leftbar = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Leftbar.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-leftbar':
            return (0, default_leftbar_1.default)(pageName, blockName);
        case 'default-leftbar':
        // return defaultLeftbar(pageName, blockName);
    }
};
exports.default = Leftbar;
//# sourceMappingURL=Leftbar.js.map
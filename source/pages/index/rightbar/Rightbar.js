"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_rightbar_1 = __importDefault(require("./default-rightbar/default-rightbar"));
var Rightbar = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Rightbar.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-rightbar':
            return (0, default_rightbar_1.default)(pageName, blockName);
        case 'default-rightbar':
        // return defaultRightbar(pageName, blockName);
    }
};
exports.default = Rightbar;
//# sourceMappingURL=Rightbar.js.map
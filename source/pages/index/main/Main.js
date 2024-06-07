"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_main_1 = __importDefault(require("./default-main/default-main"));
var Main = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Main.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-main':
            return (0, default_main_1.default)(pageName, blockName);
        case 'default-main':
        // return defaultMain(pageName, blockName);
    }
};
exports.default = Main;
//# sourceMappingURL=Main.js.map
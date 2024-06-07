"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_overlay_1 = __importDefault(require("./default-overlay/default-overlay"));
var Overlay = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Overlay.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-overlay':
            return (0, default_overlay_1.default)(pageName, blockName);
        case 'default-overlay':
        // return defaultOverlay(pageName, blockName);
    }
};
exports.default = Overlay;
//# sourceMappingURL=Overlay.js.map
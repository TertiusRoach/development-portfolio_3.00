"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// default-overlay.tsx
var react_1 = __importDefault(require("react"));
function defaultOverlay(pageName, blockName) {
    console.log('//--|🠊 default-overlay.tsx loaded 🠈|--//');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, pageName),
        react_1.default.createElement("h4", null, blockName)));
}
exports.default = defaultOverlay;
//# sourceMappingURL=default-overlay.js.map
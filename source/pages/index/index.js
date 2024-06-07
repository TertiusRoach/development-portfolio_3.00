"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
var react_1 = __importDefault(require("react"));
var Body_1 = __importDefault(require("./body/Body"));
var client_1 = require("react-dom/client");
var element = document.getElementById('index-body');
var blockName = 'default';
if (element) {
    var load = react_1.default.createElement(Body_1.default, { pageName: blockName, blockName: "".concat(blockName, "-body") });
    (0, client_1.createRoot)(element).render(load);
}
else {
    throw new Error('Root element not found.');
}
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBody = void 0;
var react_1 = __importDefault(require("react"));
var Overlay_1 = __importDefault(require("../../overlay/Overlay"));
var Header_1 = __importDefault(require("../../header/Header"));
var Footer_1 = __importDefault(require("../../footer/Footer"));
var Leftbar_1 = __importDefault(require("../../leftbar/Leftbar"));
var Rightbar_1 = __importDefault(require("../../rightbar/Rightbar"));
var Main_1 = __importDefault(require("../../main/Main"));
var Data_1 = __importDefault(require("../../data/Data"));
function defaultBody(pageName, blockName) {
    var page = pageName;
    var block = blockName;
    console.log('//--|🠊 Optional: default-body.tsx loaded 🠈|--//');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { id: "".concat(pageName, "-overlay"), className: "".concat(block, "-overlay") },
            react_1.default.createElement(Overlay_1.default, { pageName: "".concat(pageName, "-overlay"), blockName: "".concat(block, "-overlay") })),
        react_1.default.createElement("header", { style: { zIndex: 4 }, id: "".concat(pageName, "-header"), className: "".concat(block, "-header") },
            react_1.default.createElement(Header_1.default, { pageName: "".concat(pageName, "-header"), blockName: "".concat(block, "-header") })),
        react_1.default.createElement("footer", { style: { zIndex: 3 }, id: "".concat(pageName, "-footer"), className: "".concat(block, "-footer") },
            react_1.default.createElement(Footer_1.default, { pageName: "".concat(pageName, "-footer"), blockName: "".concat(block, "-footer") })),
        react_1.default.createElement("aside", { style: { zIndex: 2 }, id: "".concat(pageName, "-leftbar"), className: "".concat(block, "-leftbar") },
            react_1.default.createElement(Leftbar_1.default, { pageName: "".concat(pageName, "-leftbar"), blockName: "".concat(block, "-leftbar") })),
        react_1.default.createElement("aside", { style: { zIndex: 1 }, id: "".concat(pageName, "-rightbar"), className: "".concat(block, "-rightbar") },
            react_1.default.createElement(Rightbar_1.default, { pageName: "".concat(pageName, "-rightbar"), blockName: "".concat(block, "-rightbar") })),
        react_1.default.createElement("main", { style: { zIndex: 0 }, id: "".concat(pageName, "-main"), className: "".concat(block, "-main") },
            react_1.default.createElement(Main_1.default, { pageName: "".concat(pageName, "-main"), blockName: "".concat(block, "-main") })),
        react_1.default.createElement("script", { id: "".concat(pageName, "-data"), className: "".concat(block, "-data") },
            react_1.default.createElement(Data_1.default, { pageName: "".concat(pageName, "-data"), blockName: "".concat(block, "-data") }))));
}
exports.defaultBody = defaultBody;
exports.default = defaultBody;
//# sourceMappingURL=default-body.js.map
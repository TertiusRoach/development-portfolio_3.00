"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// default-footer.tsx
var react_1 = __importDefault(require("react"));
function defaultFooter(pageName, blockName) {
    var page = pageName;
    var block = blockName;
    console.log('//--|🠊 default-footer.tsx loaded 🠈|--//');
    var linkedIn = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/linkedin.svg";
    var gitHub = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/github.svg";
    var youTube = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3385d592cf5b4db40db8ea181b52f13ec9291e53/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/brands/youtube.svg";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("menu", { id: "footer-navigation" },
            react_1.default.createElement("button", { className: "footer-linkedin" },
                react_1.default.createElement("a", { href: "https://www.linkedin.com/in/tertius-roach/", target: "_blank" },
                    react_1.default.createElement("img", { src: linkedIn, alt: "www.linkedin.com/in/tertius-roach/" }))),
            react_1.default.createElement("button", { className: "footer-github" },
                react_1.default.createElement("a", { href: "https://github.com/TertiusRoach", target: "_blank" },
                    react_1.default.createElement("img", { src: gitHub, alt: "github.com/TertiusRoach" }))),
            react_1.default.createElement("button", { className: "footer-youtube" },
                react_1.default.createElement("a", { href: "https://www.youtube.com/@TertiusRoach", target: "_blank" },
                    react_1.default.createElement("img", { src: youTube, alt: "www.youtube.com/@TertiusRoach" }))))));
}
exports.default = defaultFooter;
//# sourceMappingURL=default-footer.js.map
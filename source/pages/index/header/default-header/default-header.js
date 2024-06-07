"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// default-header.tsx
var jquery_1 = __importDefault(require("jquery"));
var react_1 = __importDefault(require("react"));
function defaultHeader(pageName, blockName) {
    var page = pageName;
    var block = blockName;
    var archiveURI = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00';
    var logoAdjacent = "".concat(archiveURI, "/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-adjacent/primary-light.svg");
    var logoIcon = "".concat(archiveURI, "/65b0fdc15d33bc59025893b17dea07b08dc3a52c/source/front-end/pages/index/%7Econtent/svg-files/signature-icon/primary-light.svg");
    var homeHeader = "".concat(archiveURI, "/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/home.svg");
    var skillsHeader = "".concat(archiveURI, "/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/lightbulb-on.svg");
    var contactHeader = {
        desktop: "".concat(archiveURI, "/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/phone.svg"),
        mobile: "".concat(archiveURI, "/e88887177fcc7c80c4c3ad5db0268a1bcffa1fa6/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mobile-alt.svg"),
    };
    var projectsMain = "".concat(archiveURI, "/c028ce2a23eafd9b5f267f74262e47621ada789b/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/browser.svg");
    console.log('//--|🠊 default-header.tsx loaded 🠈|--//');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("aside", { id: "header-aside" },
            react_1.default.createElement("img", { src: logoAdjacent, alt: "R\u00E9sum\u00E9 Logo" })),
        react_1.default.createElement("menu", { id: "header-menu" },
            react_1.default.createElement("button", { id: "header-home", className: "highlight" },
                react_1.default.createElement("a", { href: "#main-home" },
                    react_1.default.createElement("img", { src: homeHeader, alt: "..." }),
                    react_1.default.createElement("h4", null, "Home"))),
            react_1.default.createElement("button", { id: "header-skills", className: "downplay" },
                react_1.default.createElement("a", { href: "#main-skills" },
                    react_1.default.createElement("img", { src: skillsHeader, alt: "..." }),
                    react_1.default.createElement("h4", null, "Skills"))),
            react_1.default.createElement("button", { id: "header-contact", className: "downplay" },
                react_1.default.createElement("a", { href: "#main-contact" },
                    react_1.default.createElement("img", { src: contactHeader.desktop, alt: "..." }),
                    react_1.default.createElement("h4", null, "Contact"))))));
}
exports.default = defaultHeader;
(0, jquery_1.default)(function () {
    var headerButtons = '#header-menu button';
    (0, jquery_1.default)(headerButtons).on('click', function (event) {
        var target = event.currentTarget; //--|🠊 Extract the clicked button element 🠈|--//
        var retrieve = {
            //--|🠋 Define an object to hold related elements and their properties 🠋|--//
            element: target, //--|🠊 Reference to the clicked button element 🠈|--//
            get parent() {
                return (0, jquery_1.default)(target).parent()[0]; //--|🠊 Get the parent element of the clicked button 🠈|--//
            },
            get children() {
                return (0, jquery_1.default)(target).parent().children().toArray(); //--|🠊 Get an array of children elements of the parent 🠈|--//
            },
            get siblings() {
                return (0, jquery_1.default)(target).siblings().toArray(); //--|🠊 Get an array of sibling elements of the clicked button 🠈|--//
            },
        };
        (0, jquery_1.default)(retrieve.siblings).removeClass().addClass('downplay'); //--|🠊 Apply the 'downplay' class to all sibling elements 🠈|--//
        (0, jquery_1.default)(retrieve.element).removeClass('downplay').addClass('highlight'); //--|🠊 Apply the 'highlight' class to the clicked button element 🠈|--//
    });
});
//# sourceMappingURL=default-header.js.map
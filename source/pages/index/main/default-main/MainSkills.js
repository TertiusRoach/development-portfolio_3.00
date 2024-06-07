"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var leftImageURI = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-left.svg";
var rightImageURI = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f91bdb9647f6489681a751181c5b7faccb92d16d/source/front-end/pages/index/%7Econtent/svg-files/icon-collection/duotone/chevron-circle-right.svg";
var leftClick = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-left-click.svg";
var rightClick = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0cf5873cdcc5d0314fbd2a398a380bf170048d5/source/front-end/pages/index/~content/svg-files/icon-collection/duotone/mouse-right-click.svg";
function MainSkills() {
    return (react_1.default.createElement("section", { id: "main-skills" },
        react_1.default.createElement("div", { className: "margin-main" },
            react_1.default.createElement(Aside, { jobTitle: "developing" }),
            react_1.default.createElement(Aside, { jobTitle: "producing" }))));
}
//--|🠋 Header 🠋|--//
function Nav(_a) {
    var jobTitle = _a.jobTitle;
    return (react_1.default.createElement("nav", { className: "".concat(jobTitle, "-navigation") },
        react_1.default.createElement("button", { className: "".concat(jobTitle, "-left") },
            react_1.default.createElement("img", { src: leftImageURI, alt: "Left" })),
        react_1.default.createElement("article", null,
            react_1.default.createElement("h4", null, jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1))),
        react_1.default.createElement("button", { className: "".concat(jobTitle, "-right") },
            react_1.default.createElement("img", { src: rightImageURI, alt: "Right" }))));
}
//--|🠋 Carousel 🠋|--//
function Menu(_a) {
    var jobTitle = _a.jobTitle;
    return (react_1.default.createElement("menu", { className: "".concat(jobTitle, "-carousel") },
        react_1.default.createElement(Article, { jobTitle: "".concat(jobTitle) }),
        react_1.default.createElement(Figure, { jobTitle: "".concat(jobTitle) })));
}
//--|🠋 Container 🠋|--//
function Aside(_a) {
    var jobTitle = _a.jobTitle;
    return (react_1.default.createElement("aside", { id: "".concat(jobTitle, "-skills"), className: "collapsed" },
        react_1.default.createElement(Nav, { jobTitle: "".concat(jobTitle) }),
        react_1.default.createElement(Menu, { jobTitle: "".concat(jobTitle) }),
        react_1.default.createElement(Details, { jobTitle: "".concat(jobTitle) })));
}
//--|🠋 Tutorial 🠋|--//
function Figure(_a) {
    var jobTitle = _a.jobTitle;
    return (react_1.default.createElement("figure", { className: "".concat(jobTitle, "-tutorial") },
        react_1.default.createElement("div", { className: "".concat(jobTitle, "-icon") },
            react_1.default.createElement("img", { src: leftClick, alt: "..." }),
            react_1.default.createElement("footer", null)),
        react_1.default.createElement("div", { className: "background-cosmetics" },
            react_1.default.createElement("figcaption", { className: "foreground-cosmetics" },
                react_1.default.createElement("span", null)),
            react_1.default.createElement("figcaption", { className: "midground-cosmetics" },
                react_1.default.createElement("span", null)),
            react_1.default.createElement("figcaption", { className: "background-cosmetics" },
                react_1.default.createElement("span", null)))));
}
//--|🠋 Information 🠋|--//
function Details(_a) {
    var jobTitle = _a.jobTitle;
    return (react_1.default.createElement("details", null,
        react_1.default.createElement("h1", null, "Title"),
        react_1.default.createElement("h3", null, "".concat(jobTitle)),
        react_1.default.createElement("p", null, "Description")));
}
//--|🠋 Icons & Items 🠋|--//
function Article(_a) {
    var jobTitle = _a.jobTitle;
    var selectedArticle = (0, react_2.useRef)(null);
    var _b = (0, react_2.useState)(0), getWidth = _b[0], setWidth = _b[1];
    (0, react_2.useEffect)(function () {
        if (selectedArticle.current) {
            setWidth(selectedArticle.current.offsetWidth);
        }
    }, []);
    var section;
    switch (jobTitle) {
        case 'developing':
            section = ['languages', 'utilities', 'databases'];
            break;
        case 'producing':
            section = ['design', 'editing', 'admin'];
            break;
    }
    // console.log(section);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("article", { ref: selectedArticle, 
            // The solution lies here. Maybe a for() loop?
            id: "".concat(section[0], "-skills"), className: "".concat(jobTitle, "-article"), style: { right: "-".concat(getWidth * 0, "px") } },
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." }))),
        react_1.default.createElement("article", { id: "", className: "".concat(jobTitle, "-article"), style: { right: "-".concat(getWidth * 1, "px") } },
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." }))),
        react_1.default.createElement("article", { id: "", className: "".concat(jobTitle, "-article"), style: { right: "-".concat(getWidth * 2, "px") } },
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })),
            react_1.default.createElement("li", null,
                react_1.default.createElement("img", { src: leftClick, alt: "..." })))));
}
exports.default = MainSkills;
//--|🠊 Separate Sections 🠈|--//
/*
      let skillSection: Array<string>;
      try {
        // Set skillSection based on jobTitle
        if (jobTitle === 'developing') {
          skillSection = ['languages', 'utilities', 'databases'];
        } else if (jobTitle === 'producing') {
          skillSection = ['design', 'editing', 'admin']; // Add other sections as needed
        } else {
          throw new Error('//--|🠊 Broken! default-main.tsx 🠈|--//');
        }
      } catch (error) {
        console.log('//--|🠊 Broken! default-main.tsx 🠈|--//');
        // Handle error or log it
      }
      */
//# sourceMappingURL=MainSkills.js.map
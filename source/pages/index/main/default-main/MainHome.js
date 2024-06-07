"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function MainHome() {
    var jobTitle = ['Multimedia Programmer'];
    var profilePicture = "https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/front-end/pages/index/%7Econtent/png-files/profile-picture.png";
    return (react_1.default.createElement("section", { id: "main-home" },
        react_1.default.createElement("div", { className: "margin-main" },
            react_1.default.createElement("aside", { id: "home-cover" },
                react_1.default.createElement("header", { className: "home-header" },
                    react_1.default.createElement("h1", { className: "job-title", "data-text": jobTitle[0] }, jobTitle[0]),
                    react_1.default.createElement("h3", null, "Development Portfolio")),
                react_1.default.createElement("menu", { className: "home-buttons" },
                    react_1.default.createElement("button", { className: "my-career" },
                        react_1.default.createElement("a", null,
                            react_1.default.createElement("h6", null, "My Career"))),
                    react_1.default.createElement("button", { className: "my-projects" },
                        react_1.default.createElement("a", null,
                            react_1.default.createElement("h6", null, "My Projects")))),
                react_1.default.createElement("p", { className: "home-description" }, "As a full-stack developer, my focus is on building websites, animations, and applications designed to captivate users from the first click. By blending creativity with technical expertise, I aim to create standout projects that strive to make our lives easier. There's a genuine passion within me to experiment with new tools and stay updated with multimedia technologies, allowing me to bring fresh and innovative solutions to each project. I'm eager to collaborate with fellow creatives, employers, and enthusiasts to turn concepts into impactful, enduring applications. While lacking a traditional CS degree, my unique perspective undoubtedly adds value. I thrive in environments conducive to exploring new tools with clear goals, and my passion lies in partnering with visionary creatives to transform concepts into digital masterpieces. Through hands-on experience and a continuous learning journey, my arsenal of skills can deliver exceptional results to anyone seeking my services, whether permanent or contract-based."),
                react_1.default.createElement("div", { className: "mid-ground" })),
            react_1.default.createElement("aside", { id: "home-profile" },
                react_1.default.createElement("img", { src: profilePicture, alt: "Profile Picture" })))));
}
exports.default = MainHome;
//# sourceMappingURL=MainHome.js.map
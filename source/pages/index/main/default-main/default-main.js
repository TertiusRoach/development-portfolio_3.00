"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// default-main.tsx
var jquery_1 = __importDefault(require("jquery"));
var react_1 = __importDefault(require("react"));
var MainHome_1 = __importDefault(require("../default-main/MainHome"));
var MainSkills_1 = __importDefault(require("../default-main/MainSkills"));
var MainContact_1 = __importDefault(require("../default-main/MainContact"));
function defaultMain(pageName, blockName) {
    var page = pageName;
    var block = blockName;
    console.log('//--|🠊 default-main.tsx loaded 🠈|--//');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("article", { className: "scalable-main" },
            react_1.default.createElement(MainHome_1.default, null),
            react_1.default.createElement(MainSkills_1.default, null),
            react_1.default.createElement(MainContact_1.default, null))));
}
exports.default = defaultMain;
(0, jquery_1.default)(function () {
    //--|🠋 Developer 🠋|--//
    var devDetails = '#developing-skills details';
    var devFigure = '#developing-skills menu figure';
    var devCarousel = '#developing-skills .developing-carousel article';
    var devLeftSelector = '#developing-skills .developing-navigation button[class*="left"] img';
    var devRightSelector = '#developing-skills .developing-navigation button[class*="right"] img';
    //--|🠋 Producer 🠋|--//
    var proDetails = '#producing-skills details';
    var proFigure = '#producing-skills menu figure';
    var proCarousel = '#producing-skills .producing-carousel article';
    var proLeftSelector = '#producing-skills .producing-navigation button[class*="left"] img';
    var proRightSelector = '#producing-skills .producing-navigation button[class*="right"] img';
    //--|🠋 Common Variables 🠋|--//
    var devIndex = 0;
    var proIndex = 0;
    var $devArticle = (0, jquery_1.default)(devCarousel);
    var $proArticle = (0, jquery_1.default)(proCarousel);
    var devArticles = $devArticle.length;
    var proArticles = $proArticle.length;
    var devWidth = $devArticle.first().width() || 0;
    var proWidth = $proArticle.first().width() || 0;
    //--|🠋 Developer Events 🠋|--//
    (0, jquery_1.default)(devFigure).on('click', function () {
        (0, jquery_1.default)('#producing-skills').css('zIndex', '-1');
        (0, jquery_1.default)(devFigure).css('display', 'none');
        (0, jquery_1.default)('#developing-skills').toggleClass('collapsed expanded');
    });
    (0, jquery_1.default)(devDetails).on('click', function () {
        (0, jquery_1.default)('#producing-skills').css('zIndex', '');
        (0, jquery_1.default)(devFigure).css('display', 'flex');
        (0, jquery_1.default)('#developing-skills').toggleClass('expanded collapsed');
    });
    //--|🠋 Producer Events 🠋|--//
    (0, jquery_1.default)(proFigure).on('click', function () {
        (0, jquery_1.default)(proFigure).css('display', 'none');
        (0, jquery_1.default)('#developing-skills').css('zIndex', '-1');
        (0, jquery_1.default)('#producing-skills').toggleClass('collapsed expanded');
    });
    (0, jquery_1.default)(proDetails).on('click', function () {
        (0, jquery_1.default)(proFigure).css('display', 'flex');
        (0, jquery_1.default)('#developing-skills').css('zIndex', '');
        (0, jquery_1.default)('#producing-skills').toggleClass('expanded collapsed');
    });
    //--|🠋 Developer Navigation 🠋|--//
    var developerNavigation = function (newIndex) {
        var direction = newIndex > devIndex ? '+=' : '-=';
        $devArticle.animate({ right: "".concat(direction).concat(devWidth, "px") }, 500);
        devIndex = newIndex;
        updateMenu(devIndex, $devArticle);
        updateNavigation();
    };
    //--|🠋 Producer Navigation 🠋|--//
    var producerNavigation = function (newIndex) {
        var direction = newIndex > proIndex ? '+=' : '-=';
        $proArticle.animate({ right: "".concat(direction).concat(proWidth, "px") }, 500);
        proIndex = newIndex;
        updateMenu(proIndex, $proArticle);
        updateNavigation();
    };
    //--|🠋 Update Navigation 🠋|--//
    var updateNavigation = function () {
        // Developer navigation
        $developerLeftButton.toggleClass('disabled', devIndex === 0).toggleClass('enabled', devIndex > 0);
        $developerRightButton
            .toggleClass('disabled', devIndex === devArticles - 1)
            .toggleClass('enabled', devIndex < devArticles - 1);
        // Producer navigation
        $producerLeftButton.toggleClass('disabled', proIndex === 0).toggleClass('enabled', proIndex > 0);
        $producerRightButton
            .toggleClass('disabled', proIndex === proArticles - 1)
            .toggleClass('enabled', proIndex < proArticles - 1);
    };
    //--|🠋 Update Menu 🠋|--//
    var updateMenu = function (newIndex, $article) {
        $article.removeClass('visible hidden').each(function (index) {
            (0, jquery_1.default)(this)
                .toggleClass('visible', index === newIndex)
                .toggleClass('hidden', index !== newIndex);
        });
    };
    //--|🠋 Developer Navigation Buttons 🠋|--//
    var $developerLeftButton = (0, jquery_1.default)(devLeftSelector).parent();
    var $developerRightButton = (0, jquery_1.default)(devRightSelector).parent();
    $developerRightButton.on('click', function () {
        if (devIndex < devArticles - 1)
            developerNavigation(devIndex + 1);
    });
    $developerLeftButton.on('click', function () {
        if (devIndex > 0)
            developerNavigation(devIndex - 1);
    });
    //--|🠋 Producer Navigation Buttons 🠋|--//
    var $producerLeftButton = (0, jquery_1.default)(proLeftSelector).parent();
    var $producerRightButton = (0, jquery_1.default)(proRightSelector).parent();
    $producerRightButton.on('click', function () {
        if (proIndex < proArticles - 1)
            producerNavigation(proIndex + 1);
    });
    $producerLeftButton.on('click', function () {
        if (proIndex > 0)
            producerNavigation(proIndex - 1);
    });
    //--|🠋 Initial update 🠋|--//
    updateNavigation();
    updateMenu(devIndex, $devArticle);
    updateMenu(proIndex, $proArticle);
});
//# sourceMappingURL=default-main.js.map
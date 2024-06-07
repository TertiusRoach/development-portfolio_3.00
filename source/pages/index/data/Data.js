"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_data_1 = __importDefault(require("./default-data/default-data"));
var Data = function (_a) {
    var pageName = _a.pageName, blockName = _a.blockName;
    var page = pageName;
    var block = blockName;
    // console.log('//--|🠊 Data.tsx Detected 🠈|--//');
    switch (blockName) {
        case 'default-data':
            return (0, default_data_1.default)(pageName, blockName);
        case 'resume-data':
        // return resumeData(pageName, blockName);
    }
};
exports.default = Data;
//# sourceMappingURL=Data.js.map
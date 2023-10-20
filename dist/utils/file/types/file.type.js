"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = void 0;
const file_extensions_1 = require("../constants/file-extensions");
var FileType;
(function (FileType) {
    FileType["YAML"] = ".yaml";
    FileType["PROPERTIES"] = ".properties";
    FileType["JSON"] = ".json";
    FileType["MD"] = ".md";
})(FileType || (exports.FileType = FileType = {}));

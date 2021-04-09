"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LazyLoader_1 = __importDefault(require("./LazyLoader"));
exports.default = (function () {
    var images = document.querySelectorAll('smooth-loader');
    if (!images) {
        return;
    }
    return new LazyLoader_1.default(images).execute();
});
//# sourceMappingURL=index.js.map
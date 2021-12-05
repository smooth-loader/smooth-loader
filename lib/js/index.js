"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LazyLoader_1 = __importDefault(require("./LazyLoader"));
exports.default = (selector) => {
    const images = getImagesElements(selector);
    if (!images)
        return;
    return new LazyLoader_1.default(images).execute();
};
function getImagesElements(selector) {
    if (typeof selector === 'string' && selector !== '')
        return document.querySelectorAll(selector);
    if (selector instanceof NodeList)
        return selector;
    return document.querySelectorAll('.smooth-loader');
}
//# sourceMappingURL=index.js.map
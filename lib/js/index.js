"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LazyLoader_1 = __importDefault(require("./LazyLoader"));
exports.default = (selector, config) => {
    const images = getImagesElements(selector);
    if (!images)
        return;
    const configurations = config || {
        root: null,
        threshold: 0,
    };
    return new LazyLoader_1.default(images, configurations).execute();
};
function getImagesElements(selector) {
    if (typeof selector === 'string' && selector !== '')
        return document.querySelectorAll(selector);
    if (selector instanceof NodeList)
        return selector;
    return document.querySelectorAll('.smooth-loader[data-src]');
}
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = __importDefault(require("./handler"));
exports.default = (selector, config) => {
    const images = getImagesElements(selector);
    if (!images) {
        return;
    }
    const configurations = config || {
        root: null,
        threshold: 0,
    };
    return (0, handler_1.default)(Array.from(images), configurations);
};
function getImagesElements(selector) {
    if (typeof selector === 'string' && selector !== '') {
        return document.querySelectorAll(selector);
    }
    if (selector instanceof NodeList) {
        return selector;
    }
    return document.querySelectorAll('.smooth-loader[data-src]');
}
//# sourceMappingURL=index.js.map
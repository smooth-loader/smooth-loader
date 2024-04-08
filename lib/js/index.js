"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const observerCreator_1 = __importDefault(require("./observerCreator"));
exports.default = (selector, config) => {
    const images = getImagesElements(selector);
    if (!images) {
        return;
    }
    const configurations = config || {
        root: null,
        threshold: 0,
    };
    return (0, observerCreator_1.default)(images, configurations);
};
function getImagesElements(selector) {
    if (!selector) {
        const elements = document.querySelectorAll('.smooth-loader[data-src]');
        return Array.from(elements);
    }
    if (typeof selector === 'string') {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements);
    }
    if (selector instanceof NodeList) {
        return Array.from(selector);
    }
    return selector;
}
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageLoader_1 = require("./imageLoader");
/**
 * Creates image object, gets attributes from placeholder,
 * sets them on image object, adds classes to image and
 * when image is loaded, appends it to a placeholder
 */
function default_1(images, config) {
    images.forEach(img => window['IntersectionObserver'] ? createObserver(img, config) : (0, imageLoader_1.loadImage)(img));
}
exports.default = default_1;
/**
 * Creates instance of IntersectionObserver and loads image in DOM
 * as soon as image will be visible on the screen
 */
function createObserver(lazyImage, config) {
    const handleObserver = (entries, observer) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) {
                continue;
            }
            (0, imageLoader_1.loadImage)(lazyImage);
            observer.unobserve(lazyImage);
        }
    };
    const observer = new IntersectionObserver(handleObserver, config);
    observer.observe(lazyImage);
}
//# sourceMappingURL=handler.js.map
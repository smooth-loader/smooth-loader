"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageLoader_1 = require("./imageLoader");
/**
 * Creates image object, gets attributes from placeholder,
 * sets them on image object, adds classes to image and
 * when image is loaded, appends it to a placeholder
 */
function default_1(images, config) {
    for (const img of images) {
        if (browserSupportsIntersectionObserver()) {
            applyIntersectionObserverTo(img, config);
            continue;
        }
        (0, imageLoader_1.loadImage)(img);
    }
}
exports.default = default_1;
function browserSupportsIntersectionObserver() {
    return 'IntersectionObserver' in window;
}
/**
 * Creates instance of IntersectionObserver and loads image in DOM
 * as soon as image will be visible on the screen
 */
function applyIntersectionObserverTo(img, config) {
    // This callback will be called every time the image is visible on the screen
    const handleObserver = (entries, observer) => {
        for (const entry of entries) {
            // If image is not visible on the screen, do nothing
            if (!entry.isIntersecting) {
                continue;
            }
            (0, imageLoader_1.loadImage)(img);
            // Stop observing image after it's loaded
            observer.unobserve(img);
        }
    };
    new IntersectionObserver(handleObserver, config).observe(img);
}
//# sourceMappingURL=observerCreator.js.map
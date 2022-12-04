"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates image object, gets attributes from placeholder,
 * sets them on image object, adds classes to image and
 * when image is loaded, appends it to a placeholder
 */
function default_1(images, config) {
    for (const img of images) {
        window['IntersectionObserver'] ? createObserver(img, config) : loadImage(img);
    }
}
exports.default = default_1;
/**
 * If image has tag IMG then set the src attribute to img url,
 * otherwise set the background of the element to given image url
 */
function loadImage(lazyImage) {
    const imageUrl = lazyImage.getAttribute('data-src');
    if (!imageUrl) {
        return;
    }
    if (!lazyImage.hasAttribute('src')) {
        lazyImage.style.opacity = '0';
    }
    const ghostImage = new Image();
    ghostImage.addEventListener('load', () => {
        lazyImage.style.transition = 'opacity 777ms';
        lazyImage.style.opacity = '1';
    });
    ghostImage.src = imageUrl;
    if (lazyImage.tagName === 'IMG') {
        lazyImage.setAttribute('src', imageUrl);
        return;
    }
    lazyImage.style.backgroundImage = `url(${imageUrl})`;
}
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
            loadImage(lazyImage);
            observer.unobserve(lazyImage);
        }
    };
    const observer = new IntersectionObserver(handleObserver, config);
    observer.observe(lazyImage);
}
//# sourceMappingURL=loader.js.map
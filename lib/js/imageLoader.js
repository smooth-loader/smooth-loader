"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = void 0;
/**
 * If image has tag IMG then set the src attribute to img url,
 * otherwise set the background of the element to given image url
 */
function loadImage(lazyImage) {
    const imageUrl = getImageUrl(lazyImage);
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
    if (isImageElement(lazyImage)) {
        lazyImage.setAttribute('src', imageUrl);
        return;
    }
    lazyImage.style.backgroundImage = `url(${imageUrl})`;
}
exports.loadImage = loadImage;
const isImageElement = (img) => img.tagName === 'IMG';
const getImageUrl = (img) => img.getAttribute('data-src');
//# sourceMappingURL=imageLoader.js.map
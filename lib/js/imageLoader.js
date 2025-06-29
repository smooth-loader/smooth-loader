"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = loadImage;
/**
 * If image has tag IMG then set the src attribute to img url,
 * otherwise set the background of the element to given image url
 */
function loadImage(img) {
    const imageUrl = getImageUrl(img);
    if (!imageUrl) {
        console.warn('SmoothLoader: "data-src" attribute is missing or empty');
        return;
    }
    if (!img.hasAttribute('src')) {
        img.style.opacity = '0';
    }
    preloadAndFadeInImage(img, imageUrl);
    if (isImageElement(img)) {
        img.setAttribute('src', imageUrl);
        return;
    }
    img.style.backgroundImage = `url(${imageUrl})`;
}
function preloadAndFadeInImage(img, imageUrl) {
    const preloadedImage = new Image();
    preloadedImage.addEventListener('load', () => {
        img.style.transition = 'opacity 777ms';
        img.style.opacity = '1';
    });
    preloadedImage.src = imageUrl;
}
const isImageElement = (img) => img.tagName === 'IMG';
const getImageUrl = (img) => img.getAttribute('data-src');
//# sourceMappingURL=imageLoader.js.map
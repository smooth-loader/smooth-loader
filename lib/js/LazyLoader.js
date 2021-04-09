"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
class default_1 {
    constructor(images) {
        this.observerOptions = {
            root: null,
            threshold: 0,
        };
        this.images = images;
    }
    /**
     * If image has tag IMG then set the src attribute to img url,
     * otherwise set the background of the element to given image url
     */
    loadImage(img) {
        const dataAttr = img.getAttribute('data-src');
        if (!dataAttr)
            return;
        if (img.tagName === 'IMG') {
            img.setAttribute('src', dataAttr);
            img.addEventListener('load', () => img.classList.add('smooth-loaded'));
        }
        else {
            img.style.background = `url(${img.getAttribute('data-src')})`;
            setTimeout(() => img.classList.add('smooth-loaded'), 0);
        }
    }
    /**
     * Create observer object
     */
    createObserver(img) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, this.observerOptions);
        observer.observe(img);
    }
    /**
     * Creates image object, gets attributes from placeholder,
     * sets them on image object, adds classes to image and
     * when image is loaded, appends it to a placeholder
     */
    execute() {
        this.images.forEach(img => {
            !window['IntersectionObserver'] ? this.loadImage(img) : this.createObserver(img);
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=LazyLoader.js.map
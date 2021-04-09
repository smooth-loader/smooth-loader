"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
var default_1 = /** @class */ (function () {
    function default_1(images) {
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
    default_1.prototype.loadImage = function (img) {
        var dataAttr = img.getAttribute('data-src');
        if (!dataAttr)
            return;
        img.tagName === 'IMG'
            ? img.setAttribute('src', dataAttr)
            : img.style.background = "url(" + img.getAttribute('data-src') + ")";
        img.classList.add('sho-lazy-loaded');
    };
    /**
     * Create observer object
     */
    default_1.prototype.createObserver = function (img) {
        var _this = this;
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    _this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, this.observerOptions);
        observer.observe(img);
    };
    /**
     * Creates image object, gets attributes from placeholder,
     * sets them on image object, adds classes to image and
     * when image is loaded, appends it to a placeholder
     */
    default_1.prototype.execute = function () {
        var _this = this;
        this.images.forEach(function (img) {
            !window['IntersectionObserver'] ? _this.loadImage(img) : _this.createObserver(img);
        });
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=LazyLoader.js.map
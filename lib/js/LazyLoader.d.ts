import { Config, LazyImage } from './types';
/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
export default class {
    private readonly images;
    private readonly config;
    constructor(images: NodeListOf<LazyImage>, config: Config);
    /**
     * If image has tag IMG then set the src attribute to img url,
     * otherwise set the background of the element to given image url
     */
    private loadImage;
    /**
     * Create observer object that will trigger loading image function
     * when it's gonna be visible on the screen
     */
    private createObserver;
    /**
     * Creates image object, gets attributes from placeholder,
     * sets them on image object, adds classes to image and
     * when image is loaded, appends it to a placeholder
     */
    execute(): void;
}
//# sourceMappingURL=LazyLoader.d.ts.map
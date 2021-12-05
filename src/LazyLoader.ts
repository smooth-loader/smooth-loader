import { LazyImage } from './types'

/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
export default class {
    private readonly images: NodeListOf<LazyImage>
    private observerOptions = {
        root: null,
        threshold: 0,
    }

    public constructor(images: NodeListOf<LazyImage>) {
        this.images = images
    }

    /**
     * If image has tag IMG then set the src attribute to img url,
     * otherwise set the background of the element to given image url
     */
    private loadImage(img: LazyImage): void {
        const imageUrl = img.getAttribute('data-src')

        if (!imageUrl) return

        if (img.tagName === 'IMG') {
            img.setAttribute('src', imageUrl)
            img.addEventListener('load', () => img.classList.add('smooth-loaded'))
        } else {
            img.style.backgroundImage = `url(${img.getAttribute('data-src')})`
            setTimeout(() => img.classList.add('smooth-loaded'), 0)
        }
    }

    /**
     * Create observer object
     */
    private createObserver(img: LazyImage): void {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(img)
                    observer.unobserve(img)
                }
            })
        }, this.observerOptions)

        observer.observe(img)
    }

    /**
     * Creates image object, gets attributes from placeholder,
     * sets them on image object, adds classes to image and
     * when image is loaded, appends it to a placeholder
     */
    public execute(): void {
        this.images.forEach(img => {
            !window['IntersectionObserver'] ? this.loadImage(img) : this.createObserver(img)
        })
    }
}
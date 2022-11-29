import { Config, LazyImage } from './types'

/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
export default class {
    public constructor(
        private readonly images: NodeListOf<LazyImage>,
        private readonly config: Config
    ) {
    }

    /**
     * If image has tag IMG then set the src attribute to img url,
     * otherwise set the background of the element to given image url
     */
    private loadImage(img: LazyImage): void {
        const imageUrl = img.getAttribute('data-src')

        if (!imageUrl)
            return

        if (img.hasAttribute('src')) {
            img.style.filter = 'blur(7px)'
        } else {
            img.style.opacity = '0'
        }

        const ghostImage = new Image()

        ghostImage.addEventListener('load', () => {
            img.style.transition = 'opacity 777ms'
            img.style.opacity = '1'
            img.style.filter = 'none'
        })

        ghostImage.src = imageUrl

        img.tagName === 'IMG'
            ? img.setAttribute('src', imageUrl)
            : img.style.backgroundImage = `url(${imageUrl})`
    }


    /**
     * Create observer object that will trigger loading image function
     * when it's gonna be visible on the screen
     */
    private createObserver(img: LazyImage): void {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(img)
                    observer.unobserve(img)
                }
            })
        }, this.config)

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
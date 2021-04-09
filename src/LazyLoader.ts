/**
 * Class that handles lazy loading images with
 * Intersection Observer
 */
 export default class {
    private readonly images: NodeListOf<HTMLDivElement | HTMLImageElement>
    private observerOptions = {
        root: null,
        threshold: 0,
    }

    public constructor(images: NodeListOf<HTMLDivElement | HTMLImageElement>) {
        this.images = images
    }

    /**
     * If image has tag IMG then set the src attribute to img url,
     * otherwise set the background of the element to given image url
     */
    private loadImage(img: HTMLDivElement | HTMLImageElement): void {
        const dataAttr = img.getAttribute('data-src')

        if (!dataAttr) return

        img.tagName === 'IMG'
            ? img.setAttribute('src', dataAttr)
            : img.style.background = `url(${img.getAttribute('data-src')})`

        setTimeout(() => img.classList.add('smooth-loaded'), 500)
    }

    /**
     * Create observer object
     */
    private createObserver(img: HTMLDivElement | HTMLImageElement): void {
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
import { Config, ImageElement } from './types'
import { loadImage } from './imageLoader'

/**
 * Creates image object, gets attributes from placeholder,
 * sets them on image object, adds classes to image and
 * when image is loaded, appends it to a placeholder
 */
export default function (images: ImageElement[], config: Config): void {
    for (const img of images) {
        if (browserSupportsIntersectionObserver()) {
            applyIntersectionObserverTo(img, config)
            continue
        }

        loadImage(img)
    }
}

function browserSupportsIntersectionObserver(): boolean {
    return 'IntersectionObserver' in window
}

/**
 * Creates instance of IntersectionObserver and loads image in DOM
 * as soon as image will be visible on the screen
 */
function applyIntersectionObserverTo(img: ImageElement, config: Config): void {
    // This callback will be called every time the image is visible on the screen
    const handleObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        for (const entry of entries) {
            // If image is not visible on the screen, do nothing
            if (!entry.isIntersecting) {
                continue
            }

            loadImage(img)

            // Stop observing image after it's loaded
            observer.unobserve(img)
        }
    }

    new IntersectionObserver(handleObserver, config).observe(img)
}

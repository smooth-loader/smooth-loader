import { Config, LazyImage } from './types'
import { loadImage } from './imageLoader'

/**
 * Creates image object, gets attributes from placeholder,
 * sets them on image object, adds classes to image and
 * when image is loaded, appends it to a placeholder
 */
export default function (images: LazyImage[], config: Config): void {
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
function applyIntersectionObserverTo(lazyImage: LazyImage, config: Config): void {
    const handleObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) {
                continue
            }

            loadImage(lazyImage)
            observer.unobserve(lazyImage)
        }
    }

    const observer = new IntersectionObserver(handleObserver, config)

    observer.observe(lazyImage)
}

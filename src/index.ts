import handler from './handler'
import { Config, LazyImage } from './types'

export default (selector?: NodeListOf<LazyImage> | LazyImage[] | string, config?: Config): void => {
    const images = getImagesElements(selector)

    if (!images) {
        return
    }

    const configurations = config || {
        root: null,
        threshold: 0,
    }

    return handler(Array.from(images), configurations)
}

function getImagesElements(selector?: NodeListOf<LazyImage> | LazyImage[] | string): NodeListOf<LazyImage> {
    if (typeof selector === 'string' && selector !== '') {
        return document.querySelectorAll<LazyImage>(selector)
    }

    if (selector instanceof NodeList) {
        return selector
    }

    return document.querySelectorAll<LazyImage>('.smooth-loader[data-src]')
}
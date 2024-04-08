import observerCreator from './observerCreator'
import { Config, LazyImage, InputTypes } from './types'

export default (selector?: InputTypes, config?: Config): void => {
    const images = getImagesElements(selector)

    if (!images) {
        return
    }

    const configurations = config || {
        root: null,
        threshold: 0,
    }

    return observerCreator(images, configurations)
}

function getImagesElements(selector?: InputTypes): LazyImage[] {
    if (!selector) {
        const elements = document.querySelectorAll<LazyImage>('.smooth-loader[data-src]')
        return Array.from(elements)
    }

    if (typeof selector === 'string') {
        const elements = document.querySelectorAll<LazyImage>(selector)
        return Array.from(elements)
    }

    if (selector instanceof NodeList) {
        return Array.from(selector)
    }

    return selector
}

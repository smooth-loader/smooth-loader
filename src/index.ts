import observerCreator from './observerCreator'
import { Config, ImageElement, InputTypes } from './types'

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

function getImagesElements(selector?: InputTypes): ImageElement[] {
    if (!selector) {
        const elements = document.querySelectorAll<ImageElement>('.smooth-loader[data-src]')
        return Array.from(elements)
    }

    if (typeof selector === 'string') {
        const elements = document.querySelectorAll<ImageElement>(selector)
        return Array.from(elements)
    }

    if (selector instanceof NodeList) {
        return Array.from(selector)
    }

    return selector
}

import LazyLoader from "./LazyLoader"
import { Config, LazyImage } from './types'

export default (selector?: NodeListOf<LazyImage> | string, config?: Config): void => {
    const images = getImagesElements(selector)

    if (!images)
        return

    const configurations = config || {
        root: null,
        threshold: 0,
    }

    return new LazyLoader(images, configurations).execute()
}

function getImagesElements(selector?: NodeListOf<LazyImage> | string): NodeListOf<LazyImage> {
    if (typeof selector === 'string' && selector !== '')
        return document.querySelectorAll<LazyImage>(selector)

    if (selector instanceof NodeList)
        return selector

    return document.querySelectorAll<LazyImage>('.smooth-loader[data-src]')
}
import LazyLoader from "./LazyLoader"
import { LazyImage } from './types'

export default (selector?: NodeListOf<LazyImage> | string) => {
    const images = getImagesElements(selector)

    if (!images)
        return

    return new LazyLoader(images).execute()
}

function getImagesElements(selector?: NodeListOf<LazyImage> | string): NodeListOf<LazyImage> {
    if (typeof selector === 'string' && selector !== '')
        return document.querySelectorAll<LazyImage>(selector)

    if (selector instanceof NodeList)
        return selector

    return document.querySelectorAll<LazyImage>('.smooth-loader')
}
import { LazyImage } from './types'

/**
 * If image has tag IMG then set the src attribute to img url,
 * otherwise set the background of the element to given image url
 */
export function loadImage(lazyImage: LazyImage): void {
    const imageUrl = getImageUrl(lazyImage)

    if (!imageUrl) {
        return
    }

    if (!lazyImage.hasAttribute('src')) {
        lazyImage.style.opacity = '0'
    }

    const ghostImage = new Image()

    ghostImage.addEventListener('load', () => {
        lazyImage.style.transition = 'opacity 777ms'
        lazyImage.style.opacity = '1'
    })

    ghostImage.src = imageUrl

    if (isImageElement(lazyImage)) {
        lazyImage.setAttribute('src', imageUrl)
        return
    }

    lazyImage.style.backgroundImage = `url(${imageUrl})`
}

const isImageElement = (img: LazyImage) => img.tagName === 'IMG'
const getImageUrl = (img: LazyImage) => img.getAttribute('data-src')
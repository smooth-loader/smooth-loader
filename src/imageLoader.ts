import { ImageElement } from './types'

/**
 * If image has tag IMG then set the src attribute to img url,
 * otherwise set the background of the element to given image url
 */
export function loadImage(img: ImageElement): void {
    const imageUrl = getImageUrl(img)

    if (!imageUrl) {
        console.warn('SmoothLoader: "data-src" attribute is missing or empty')
        return
    }

    if (!img.hasAttribute('src')) {
        img.style.opacity = '0'
    }

    preloadAndFadeInImage(img, imageUrl)

    if (isImageElement(img)) {
        img.setAttribute('src', imageUrl)
        return
    }

    img.style.backgroundImage = `url(${imageUrl})`
}

function preloadAndFadeInImage(img: ImageElement, imageUrl: string): void {
    const preloadedImage = new Image()

    preloadedImage.addEventListener('load', () => {
        img.style.transition = 'opacity 777ms'
        img.style.opacity = '1'
    })

    preloadedImage.src = imageUrl
}

const isImageElement = (img: ImageElement) => img.tagName === 'IMG'
const getImageUrl = (img: ImageElement) => img.getAttribute('data-src')
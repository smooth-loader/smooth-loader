import LazyLoader from "./LazyLoader"

export default () => {
    const images = document.querySelectorAll<HTMLImageElement|HTMLDivElement>('.smooth-loader')

    if (!images) {
        return
    }

    return new LazyLoader(images).execute()
}
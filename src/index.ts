import LazyLoader from "./LazyLoader"

export default (images: NodeListOf<HTMLDivElement | HTMLImageElement>) => {
    return new LazyLoader(images).start()
}

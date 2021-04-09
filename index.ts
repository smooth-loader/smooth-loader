import LazyLoader from "./LazyLoader"

export function imageObserver(images: NodeListOf<HTMLDivElement | HTMLImageElement>) {
    return new LazyLoader(images).start()
}

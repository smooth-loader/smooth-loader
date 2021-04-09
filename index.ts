import LazyLoader from "./lib/LazyLoader"

export function imageObserver(images: NodeListOf<HTMLDivElement | HTMLImageElement>) {
    return new LazyLoader(images).start()
}

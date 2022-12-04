export type LazyImage = HTMLDivElement | HTMLImageElement
export type InputTypes = NodeListOf<LazyImage> | LazyImage[] | string

export interface Config extends IntersectionObserverInit { }
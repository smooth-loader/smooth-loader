export type ImageElement = HTMLDivElement | HTMLImageElement
export type InputTypes = NodeListOf<ImageElement> | ImageElement[] | string

export interface Config extends IntersectionObserverInit { }

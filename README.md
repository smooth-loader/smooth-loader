- Documentation menu
    - [📄 Description](#-description)
    - [🎁 Features](#-features)
    - [✍️ Usage](#%EF%B8%8F-usage)
    - [⚙️ Configurations](#%EF%B8%8F-configurations)
    - [🚀️ Quick start](#-quick-start)
- Useful links
    - [NPM](https://www.npmjs.com/package/smooth-loader)
    - [Usage on codesandbox](https://codesandbox.io/s/smooth-loader-example-usage-5xr6h)
    - [Example usage in production](https://shobar.com.ua/category/photo-reports)

## 📄 Description

Smooth loader allows you smoothly lazy load images and background images. Lazy Loading defers the loading of an image that is not needed on the page immediately. An image, not visible to the user when the page loads, is loaded later when the user scrolls and the image actually becomes visible. If the user never scrolls, an image that is not visible to the user never gets loaded.

This package is a MUST-HAVE for every website containing multiple images on the page. It's surely the best lazy loading package on NPM that you can configure to your own needs.

## 🎁 Features

- ✅ Written in TypeScript;
- ✅ Very small package;
- ✅ Loads images with IMG tag and backgrounds;
- ✅ Loads images with a smooth fade in animation;
- ✅ Configurable;

## ✍️ Usage

To make image or element Lazy loaded, replace `src` attribute with `data-src`
on image element, and add `data-src` attribute to elements that have background
image that you want to lazy load.

- Add **smooth-loader** css class to each image or element that you want or specify your own selector for images instead of **smooth-loader**.
- Call `smoothLoader()` function when you want to lazy load images.

```js
// with .smooth-loader selector
smoothLoader()

// with custom string selector
smoothLoader('.lazy-image')

// with custom elements
const myImages = document.querySelectorAll<HTMLImageElement>('img')
smoothLoader(myImages)
```

> Note, that lazy loading works only when your elements are already in the DOM. Meaning, if images are loaded after the `smoothLoader` was executed, lazy loading will not work.

```html
<!-- Regular image -->
<img data-src="./images/me.png" class="smooth-loader">

<!-- Background image -->
<div data-src="./images/we.png" class="smooth-loader my-bg-image"></div>
```

## ⚙️ Configurations

As the second argument, you can pass configurations. Some of the parameters extend [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

```typescript
smoothLoader('.lazy-image', {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
})
```

- `root`: The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
- `rootMargin`: Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
- `threshold`: Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

## 🚀 Quick Start

```bash
# npm
npm i smooth-loader

# yarn
yarn add smooth-loader
```

```js
import smoothLoader from 'smooth-loader'

smoothLoader()
```
- Documentation menu
    - [📄 Description](#-description)
    - [🎁 Features](#-features)
    - [✍️ Usage](#%EF%B8%8F-usage)
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
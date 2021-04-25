# Description

Smooth loader allows you smoothly lazy load images and background images. Lazy Loading defers the loading of an image that is not needed on the page immediately. An image, not visible to the user when the page loads, is loaded later when the user scrolls and the image actually becomes visible. If the user never scrolls, an image that is not visible to the user never gets loaded.

- [NPM](https://www.npmjs.com/package/smooth-loader)
- [Usage on codesandbox](https://codesandbox.io/s/smooth-loader-example-usage-5xr6h)
- [Example usage in production](https://shobar.com.ua/category/photo-reports)

# Features

- Written in TypeScript
- Very small package
- Loads images with IMG tag and backgrounds
- Loads images with a smooth fade in animation

# Installation

```bash
# npm
npm i smooth-loader

# yarn
yarn add smooth-loader
```

Import `smooth-loader` and the core CSS. This assumes you're using a module bundler like webpack.

```js
import smoothLoader from 'smooth-loader'
import 'smooth-loader/lib/css/index.css'
```

# Usage

```js
smoothLoader()
```

Replace `src` attribute with `data-src` on image and add `smooth-loader` css class.

```html
<!-- Regular image -->
<img data-src="./images/me.png" class="smooth-loader">

<!-- Background image -->
<div data-src="./images/we.png" class="smooth-loader my-bg-image"></div>
```
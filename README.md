# Description

Fast and lightweight image lazy loader written in TypeScript. This package allows you to lazy load your images using IntersectionObserver. It can load background images as well as the regular images with img tag.

# Features

- Loads images with IMG tag
- Loads background images
- Loads images with nice smooth animation

# Installing

Using npm:

```bash
npm i smooth-loader
```

Using yarn:

```bash
yarn add smooth-loader
```

# Usage

Importing in your JavaScript or TypeScript.

```js
import smoothLoader from 'smooth-loader'

smoothLoader()
```

In order to create image just replace `src` attribute with `data-src` on image and add `smooth-loader` css class. For background images it's the same.

```html
<!-- Regular image -->
<img data-src="./images/me.png" class="smooth-loader">

<!-- Background image -->
<div data-src="./images/we.png" class="smooth-loader my-bg-image"></div>
```
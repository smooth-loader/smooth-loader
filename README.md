# Description

Fast and lightweight image lazy loader written in TypeScript. This package allows you to lazy load your images using IntersectionObserver. It can load background images as well as the regular images with img tag.

# Features

- Loads images with IMG tag
- Loads background images
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
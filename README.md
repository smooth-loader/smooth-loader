![Smooth loader logo](https://smooth-loader.github.io/images/logo.png)

Smooth loader allows you smoothly lazy load images and background images. Lazy Loading defers the loading of an image that is not needed on the page immediately. An image, not visible to the user when the page loads, is loaded later when the user scrolls and the image actually becomes visible. If the user never scrolls, an image that is not visible to the user never gets loaded.

This package is a MUST-HAVE for every website containing multiple images on the page. It's surely the best lazy loading package on NPM that you can configure to your own needs.

## Follow the [official documentation](https://smooth-loader.github.io) for all the details

## Contribute

### With Container Engine
#### Build an Image
To build an image, navigate to the root of the project and run this command.

With Podman:
```bash
podman-compose build
```

With Docker:
```bash
docker compose build
```

Now, you'll have an image `smooth-loader` that you can use to create a container.

#### Create `node_modules`
Run this command to install npm packages and generate a `node_modules` directory on your local machine.

With Podman:
```bash
podman-compose run --rm app npm i
```

With Docker:
```bash
docker compose run --rm app npm i
```

#### Create and Enter the Container
To create and enter inside the container, run this command.

With Podman:
```bash
podman-compose run --rm app sh
```

With Docker:
```bash
docker compose run --rm app sh
```

You'll be able to run NPM commands inside of the container and commands:
- `npm run watch` to make TypeScript watch for your changes and auto-compile everything to plain JavaScript
- `npm run build` compile all of your TypeScript files to JavaScript

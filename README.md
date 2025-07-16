![Smooth loader logo](https://smooth-loader.github.io/images/logo.png)

Smooth loader allows you smoothly lazy load images and background images. Lazy Loading defers the loading of an image that is not needed on the page immediately. An image, not visible to the user when the page loads, is loaded later when the user scrolls and the image actually becomes visible. If the user never scrolls, an image that is not visible to the user never gets loaded.

This package is a MUST-HAVE for every website containing multiple images on the page. It's surely the best lazy loading package on NPM that you can configure to your own needs.

## Follow the [official documentation](https://smooth-loader.github.io) for all the details

## Contribute

### With Container Engine
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

#### Build an Image
To build an image, navigate to the root of the project and run this command for Docker:
```bash
docker compose build
```
For Podman, run this:
```bash
podman-compose build
```

Now, you'll have an image `smooth-loader` that you can use to create a container.

#### Copy `node_modules` Locally
If you need to copy `node_modules` directory from the container to your local machine, run this command for Docker:
```bash
docker cp smooth-loader:/app/node_modules .
```
For Podman, run this:
```bash
podman cp smooth-loader:/app/node_modules .
```

> [!NOTE]
> `node_modules` is excluded from using volume, that's why you need to copy it manually in [compose.yml](compose.yml) file. It's done to prevent your local modules to be copied to Linux container, since it can create incompatibility issues between operating systems if you don't use Linux.

#### Create and Enter the Container
To create and enter inside the container, run this command for Docker:
```bash
docker compose run --rm app
```
For Podman, run this:
```bash
podman-compose run --rm app
```

You'll be able to run NPM commands inside of the container and commands:
- `npm run watch` to make TypeScript watch for your changes and auto-compile everything to plain JavaScript
- `npm run build` compile all of your TypeScript files to JavaScript

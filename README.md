# webpack-default-mangled-repo

This repository is a minimal reproduction of a problem with the latest version of Webpack regarding mangling of default export together with namespace import and object destructuring.

## Reproducing the issue

Install dependencies

```bash
npm ci
```

Run build process

```bash
npm run build
```

Start the script

```bash
npm start
```

Notice the console logs:

```bash
undefined
```

## Seeing correct behavior

Install the previous minor of webpack

```bash
npm i -D webpack@5.90.1
```

Run the build and start

```bash
npm run build
npm start
```

Observe the results

```bash
bar
```
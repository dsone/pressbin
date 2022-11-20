# Pressbin

## What is this?

A mMinimalistic pastebin for sharing text via hash rather than a link to a website storing your data.  
Nothing is saved inside a database.

## Developing

This project is build with SolidStart, to develop it the same routine applies.  
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`.  
To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Attribution
Favicon by [created by Flat Icons - Flaticon](https://www.flaticon.com/free-icons/printing-press), Favicon configuration generated with [Favicon Generator](https://realfavicongenerator.net/).
  
String compression taken from [lz-string](https://github.com/pieroxy/lz-string), MIT licensed.

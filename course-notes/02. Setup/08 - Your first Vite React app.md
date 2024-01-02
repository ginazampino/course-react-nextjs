React Simplified - Beginner

# Setup: Vite

---

While initializing a Vite application, you can select `SWC` to use a **different compiler**, which is generally faster.

The `public` folder behaves differently than in `create-react-app`. The `index.html` file does not live inside this folder in `Vite`.

Changes can be made to `Vite`'s configuration by editing the `vite.config.js` file, rather than ejecting out of `create-react-app` and working with `Webpack`.

In `Vite`, `JSX` files must end in the `.jsx` extension. Whereas in `create-react-app`, `.js` may still work.

Benefits of using `Vite`:

1. Less boilerplate code to clean up.
2. Quicker to initialize than `create-react-app`.
3. Easier to configure without ejection.
4. Easy to add plugins to the configuration file.
5. Includes built-in features, such as `Prettier`.

`npm run preview` will allow you to preview the current build inside the `dist` folder, which is created by `npm run build`.

---

https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764767-setup/5598769-08-your-first-vite-react-app

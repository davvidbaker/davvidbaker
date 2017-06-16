## Local Dev
```
npm run dev
```

## Production
*In production, we are just serving a static site, so if during development refreshing certain routes isn't working, they may still work in production because if configuring done in `next.config.js`.*

```
npm run build
```

**In order to use whoa-loader (a custom webpack loader for `.whoa` file type), we are doing an intermediate build step that runs webpack on just the `.whoa` files in the `blog` directory, and outputs a bundle that is then consumed/used in `next` build step.**
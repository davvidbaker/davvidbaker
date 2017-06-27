## Local Dev
```
npm run dev
```

To run a process that watches the blog folder and rebuilds it, for use during drafting a post, run `node blog-watcher` (see note at bottom).


### Local Dev Specifically on a blog post
So you get hot-module-reloading for the post. 
TODO don't require manually changing post name in `helper.js` 
```
npm run edit-post
```

## Production
*In production, we are just serving a static site, so if during development refreshing certain routes isn't working, they may still work in production because if configuring done in `next.config.js`.*

```
npm run build
```

**In order to use whoa-loader (a custom webpack loader for `.whoa` file type), we are doing an intermediate build step that runs webpack on just the `.whoa` files in the `blog` directory, and outputs a bundle that is then consumed/used in `next` build step.**
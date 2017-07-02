const constants = require('./constants');
const {slugs} = require('./out_blog/slugs.js');
// const { posts } = require('./internals/out_blog/output_blog_posts');

// next.config.js
module.exports = {
  webpack(cfg) {
    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    );
    return cfg;
  },
  /* path mapping for static html exports */
  exportPathMap() {
    const pathMap = {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/projects': { page: '/projects' },
    };

    /* build a path for each project */
    constants.PROJECTS.forEach((project) => {
      pathMap[`/projects/${project.name.replace(/\s/g, '-')}`] = {
        page: '/projects',
        query: { name: project.name.replace(/\s/g, '-') },
      };
    });

    /* build a path for each blog post */
    slugs.forEach((slug) => {
      pathMap[`/blog/${slug}`] = {
        page: '/blog',
        query: { slug },
      };
    });

    return pathMap;
  },
};

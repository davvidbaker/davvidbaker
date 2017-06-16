const constants = require('./constants');
const blogPosts = require('./out_blog/output');
const slugs = require('./out_blog/slugs');

// next.config.js
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.whoah?$/,
      loader: 'whoa-loader',
    });

    return config;
  },

  /* path mapping for static html exports */
  exportPathMap: function() {
    const pathMap = {
      '/': { page: '/' },
      '/blog': { page: '/blog_static' },
      '/projects': { page: '/projects' },
    };

    /* build a path for each project */
    constants.PROJECTS.forEach(project => {
      pathMap[`/projects/${project.name.replace(/\s/g, '-')}`] = {
        page: '/projects',
        query: { name: project.name.replace(/\s/g, '-') },
      };
    });

    /* build a path for each blog post */
    slugs.SLUGS.forEach(slug => {
      pathMap[`/blog/${slug}`] = {
        page: '/blog_static',
        query: { name: slug },
      };
    });

    return pathMap;
  },
};

const constants = require('./constants');
const { posts } = require('./internals/out_blog/output_blog_posts');

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
      '/blog': { page: '/blog' },
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
    posts.forEach(post => {
      pathMap[`/blog/${post.attributes.slug}`] = {
        page: '/blog',
        query: { slug: post.attributes.slug },
      };
    });

    return pathMap;
  },
};

const constants = require('./constants');

// next.config.js
module.exports = {
  exportPathMap: function() {
    const pathMap = {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
    };
    constants.PROJECTS.forEach(project => {
      pathMap[`/projects/${project.name.replace(/\s/g, '-')}`] = {
        page: '/projects',
        query: { name: project.name.replace(/\s/g, '-') },
      };
    });
    return pathMap;
  },
};

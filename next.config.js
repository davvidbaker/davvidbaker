// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
    }
  },
}
/**
 * Post Generator
 */

module.exports = {
  description: 'Add a new post',
  prompts: [
    {
      type: 'input',
      name: 'slug',
      message: 'What should the slug be? Like davvidbaker.com/blog/:slug...',
      default: 'something-catchy',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your official title?',
      default: 'Arthur, King of the Britons',
      validate: value => (value.length > 0 ? true : 'King of the who?'),
    },
    {
      type: 'confirm',
      name: 'pureWhoa',
      message: 'Do you want this to just be a .whoa file?',
      default: true,
    },
  ],
  actions: (data) => {
    const datePrefix = new Date().toISOString().match(/(.+)T/)[1];

    const actions = data.pureWhoa
      ? [
        {
          type: 'add',
          path: `../../blog/${datePrefix}_{{kebabCase slug}}.whoa`,
          templateFile: './post/post.whoa.hbs',
          abortOnFail: true,
        },
      ]
      : [
        {
          type: 'add',
          path: `../../blog/${datePrefix}_{{kebabCase slug}}.js`,
          templateFile: './post/post.js.hbs',
          abortOnFail: true,
        },
      ];

    return actions;
  },
};

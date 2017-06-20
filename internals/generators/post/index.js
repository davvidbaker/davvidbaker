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
      // validate: value => {
      //   // This is not a fool-proof regex.
      //   if (/[^\s]+/.test(value)) {
      //     return postExists(value)
      //       ? 'A post with that slug already exists! Be more creative! Or add a number!'
      //       : true;
      //   }
      //   return 'The slug es necesario.';
      // },
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your official title?',
      default: 'Arthur, King of the Britons',
      validate: value => (value.length > 0 ? true : 'King of the who?'),
    },
  ],
  actions: data => {
    const datePrefix = new Date().toISOString().match(/(.+)T/)[1];

    const actions = [
      {
        type: 'add',
        path: `../../blog/${datePrefix}_{{kebabCase slug}}.whoa`,
        templateFile: './post/post.whoa.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

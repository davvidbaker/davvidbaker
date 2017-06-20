/**
 * This who file is first transformed with webpack, and then run with node.
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

/**
 * TODO check to see if file has changed and only then re-parse it. Could help performance if the build step is getting slow.
 */
const files = fs.readdirSync('blog');
const whoaFiles = files.filter(file => file.match(/\.whoah?$/));
console.log('dirname', path.resolve(__dirname));
console.log('files', files);
console.log('whoaFiles', whoaFiles);

/**
 * require(whoahFile) // {attributes, content}
 */
const arr = whoaFiles.map(whoaFile => require(`../../blog/${whoaFile}`));
const obj = {};
arr.forEach(val => {
  obj[val.attributes.slug] = val;
});

try {
  fs.writeFile(
    'internals/out_blog/output_blog_posts.js',
    `
    /**
     * This file was automatically created ${new Date()}
     */

    module.exports = {
      posts: ${JSON.stringify(arr)}
    }
    `,
    err => {
      if (err) throw err;
      console.log(chalk.green('File has been saved'));
    }
  );
} catch (e) {
  console.error(e);
}

// try {
//   fs.writeFile(
//     'out_blog/slugs.js',
//     `
//     /**
//      * This file was automatically created ${new Date()}
//      */

//     module.exports = {
//       SLUGS: ${JSON.stringify(Object.keys(obj))}
//     }
//     `,
//     err => {
//       if (err) throw err;
//       console.log(chalk.green('File has been saved'));
//     }
//   );
// } catch (e) {
//   console.error(e);
// }

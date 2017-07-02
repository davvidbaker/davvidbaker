/**
 * This who file is first transformed with webpack, and then run with node.
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

// const writeFile = promisify('writeFile')
/**
 * TODO check to see if file has changed and only then re-parse it. Could help performance if the build step is getting slow.
 */
const files = fs.readdirSync('blog');
const whoaFiles = files.filter(file => file.match(/\.whoah?$/));
const jsFiles = files.filter(file => file.match(/\.js$/));

console.log('dirname', path.resolve(__dirname));
console.log('files', files);
console.log('whoaFiles', whoaFiles);

/**
 * require(whoahFile) // {attributes, content}
 */
const arr = whoaFiles.map(whoaFile =>
  Object.assign(require(`../../blog/${whoaFile}`), { filename: whoaFile })
);
// arr = [...arr, ...jsFiles.map(jsFile => require(`../../blog/${jsFile}`))];
// const obj = {};
// arr.forEach(val => {
//   obj[val.attributes.slug] = val;
// });

const lookUpTable = {};
arr.forEach((post) => {
  lookUpTable[post.attributes.slug] = {
    filename: post.filename.replace(/whoah?$/, 'js'),
    title: post.attributes.title,
    date: post.attributes.date,
  };
});

try {
  fs.writeFile(
    'out_blog/lookupTable.js',
    `
    /**
     * This file was automatically created ${new Date()}
     */

    export default ${JSON.stringify(lookUpTable)};
  `,
    (err) => {
      if (err) throw err;
      console.log(chalk.green('Lookup table saved.'));
    }
  );
} catch (e) {
  console.error(e, e.stack);
}

arr.forEach((post) => {
  try {
    fs.writeFile(
      `out_blog/posts/${post.filename.replace(/whoah?$/, 'js')}`,
      `
        /**
         * This file was automatically created ${new Date()}
         */

        export default { 
          attributes: ${JSON.stringify(post.attributes)}, 
          
          content: ${JSON.stringify(post.content)}
        };
  `,
      (err) => {
        if (err) throw err;
        console.log(
          chalk.green(
            `File has been saved to out_blog/${post.filename.replace(/whoah?$/, 'js')}`
          )
        );
      }
    );
  } catch (e) {
    console.error(e, e.stack);
  }
});

// try {

//   fs.writeFile(

//     'internals/out_blog/output_blog_posts.js',

//     `

//     /**

//      * This file was automatically created ${new Date()}

//      */

//     module.exports = {

//       posts: ${JSON.stringify(arr)}

//     }

//     `,

//     (err) => {

//       if (err) throw err;

//       console.log(chalk.green('File has been saved'));

//     }

//   );

// } catch (e) {

//   console.error(e);

// }

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

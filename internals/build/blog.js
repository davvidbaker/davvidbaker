/**
 * This file is first transformed with webpack and babel (probably could avoid using webpack...), and then run with node.
 *
 * We build 3 things:
 *
 * 1. A 'lookupTable' containing info about each post—title, date, dynamically loaded component.
 * 2. A file containing all the slugs that is just used for path mapping in next.config.js.
 * 3. The post files themselves. JS files don't change, but whoa files are transformed, since Next.js doesn't support custom loaders.
 *
 * It is kinda hacky in that there is a bunch of string manipulation going on. 🤷‍
 */
const fs = require('fs');
const chalk = require('chalk');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

/**
 * TODO check to see if file has changed and only then re-parse it. Could help performance if the build step is getting slow.
 */
const files = fs.readdirSync('blog');
const whoaFiles = files.filter(file => file.match(/\.whoah?$/));
const jsFiles = files.filter(file => file.match(/\.js$/));

console.log(whoaFiles, jsFiles);
/**
 * require(whoahFile) // {attributes, content}
 */
const arrWhoa = whoaFiles.map(whoaFile =>
  Object.assign(require(`../../blog/${whoaFile}`), { filename: whoaFile })
);

const lookupTable = [];
const slugs = [];

doStuffWithJSFiles();

async function doStuffWithJSFiles() {
  /* kinda roundabout way to copy files from blog folder to out_blog/posts folder*/
  // jsFiles.forEach((file) => {
  //   fs.writeFile(`out_blog/posts/${file}`, '', e => console.log(e));
  //   fs
  //     .createReadStream(`blog/${file}`)
  //     .pipe(fs.createWriteStream(`out_blog/posts/${file}`));
  // });

  const jsFilePromises = jsFiles.map(file => readFile(`blog/${file}`, 'utf8'));
  const jsFileContents = await Promise.all(jsFilePromises).catch(e =>
    console.error(e, e.stack)
  );

  jsFileContents.forEach((data, ind) => {
    /* a regex in the js files to find the attributes...hacky */
    let attributes = data.match(/const\sattributes\s=\s({[^}]*)}/)[1];
    attributes += `\n component: dynamic(import('../blog/${jsFiles[ind]}'))}`;
    lookupTable.push(attributes);

    const slug = attributes.match(/slug:\s(.*),/)[1].trim();
    slugs.push(slug);
  });

  writeLookupTable();
  writeSlugs();
}

// array of strings like 'dynamic(import([filename]))'
arrWhoa.forEach((post) => {
  lookupTable.push(
    `{
    filename: \`${post.filename.replace(/whoah?$/, 'js')}\`,
    title: \`${post.attributes.title}\`,
    date: \`${post.attributes.date}\`,
    slug: \`${post.attributes.slug}\`,
    component: dynamic(import('../out_blog/posts/${post.filename.replace(/whoah?$/, 'js')}')),
  }`
  );
  slugs.push(`'${post.attributes.slug}'`);
});

function writeSlugs() {
  try {
    fs.writeFile(
      'out_blog/slugs.js',
      `
    /**
     * This file was automatically created ${new Date()}
     */
    
    module.exports = {
      default: [${slugs}]
    };
    `,
      (err) => {
        if (err) throw err;
        console.log(chalk.green('Slugs saved.'));
      }
    );
  } catch (e) {
    console.error(e, e.stack);
  }
}

function writeLookupTable() {
  try {
    fs.writeFile(
      'out_blog/lookupTable.js',
      `
    /**
     * This file was automatically created ${new Date()}
     */
    import dynamic from 'next/dynamic';

    export default [${lookupTable}];
  `,
      (err) => {
        if (err) throw err;
        console.log(chalk.green('Lookup table saved.'));
      }
    );
  } catch (e) {
    console.error(e, e.stack);
  }
}

arrWhoa.forEach((post) => {
  try {
    fs.writeFile(
      `out_blog/posts/${post.filename.replace(/whoah?$/, 'js')}`,
      `
        /**
         * This file was automatically created ${new Date()}
         */
        import BlogPost from '../../components/Blog/Post.js';
         
        export default () => <BlogPost attributes={${JSON.stringify(post.attributes)}} content={${JSON.stringify(post.content)}} />;
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

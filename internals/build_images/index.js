const { promisify } = require('util');
const fs = require('fs');
const sharp = require('sharp');
const glob = promisify(require('glob'));
const chalk = require('chalk');
// const sizeOf = require('image-size'); // might be useful later

const access = promisify(fs.access);

(async function main() {
  const filePaths = await glob('static/**/*.{png,PNG,jpeg,jpg,JPEG,JPG}');

  filePaths
    .filter(file => !file.match(/.*_blur\.\w\w\w\w?$/))
    .forEach((filePath) => {
      const newFilePath = filePath.replace(/(\.\w*$)/, '_blur$1');

      // only create the tiny image if it doesn't already exist (if we can't access the file, it doesn't exist)
      access(newFilePath)
        .then(() => {
          console.log(chalk.yellow(`skipping ${newFilePath}`));
        })
        .catch((err) => {
          sharp(filePath)
            .resize(15)
            .toFile(newFilePath)
            .catch(e => console.log(chalk.red(filePath, e)));
        });
    });
}());

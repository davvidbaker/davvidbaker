const { promisify } = require('util');
const fs = require('fs');
const sharp = require('sharp');
const glob = promisify(require('glob'));
const chalk = require('chalk');
const sizeOf = require('image-size'); // might be useful later

const access = promisify(fs.access);

(async function main() {
  const filePaths = await glob('static/**/*.{png,PNG,jpeg,jpg,JPEG,JPG}');

  filePaths
    .filter(file => !file.match(/.*_blur\.\w\w\w\w?$/))
    .forEach((filePath) => {
      const dimensions = sizeOf(filePath);

      const newFilePathBlur = filePath
        .replace('static', 'static/processed')
        .replace(
          /(\.\w*$)/,
          `_s=${dimensions.width}w${dimensions.height}h_blur$1`
        );

      const movedFilePath = newFilePathBlur.replace('_blur', '');

      // only create the tiny image if it doesn't already exist (if we can't access the file, it doesn't exist)
      access(newFilePathBlur)
        .then(() => {
          console.log(chalk.yellow(`skipping ${newFilePathBlur}`));
        })
        .catch(() => {
          sharp(filePath)
            .resize(15)
            .toFile(newFilePathBlur)
            .catch(e => console.log(chalk.red(newFilePathBlur, e)));
        });

      // only move (and rename) if it doesn't already exist (if we can't access the file, it doesn't exist)
      // ⌛ the only reason I am still using sharp here is laziness
      access(movedFilePath)
        .then(() => {
          console.log(chalk.yellow(`skipping ${movedFilePath}`));
        })
        .catch(() => {
          sharp(filePath)
            .png()
            .toFile(movedFilePath)
            .catch(e => console.log(chalk.red(movedFilePath, e)));
        });
    });
}());

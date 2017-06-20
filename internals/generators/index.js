/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const postGenerator = require('./post/index.js');

module.exports = plop => {
  plop.setGenerator('post', postGenerator);

  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));

  plop.addHelper('date', () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 >= 10
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    return `${year}-${month}-${day}`;
  });

  plop.addHelper(
    'formattedCreationDate',
    () =>
      `${MONTHS[
        new Date().getMonth()
      ]} ${new Date().getDate()}, ${new Date().getFullYear()}`
  );
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

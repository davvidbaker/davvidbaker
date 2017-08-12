/**
 * Server is only for development.
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.match(/^\/blog\/.+/)) {
      console.log('query', query);
      console.log('pathname', pathname);
      console.log(
        'stringified',
        JSON.stringify(pathname.match(/blog\/(.*)/)[1])
      );
      app.render(req, res, '/blog', { slug: pathname.match(/blog\/(.*)/)[1] });
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3002, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('>Ready on http://localhost:3002');
  });
});

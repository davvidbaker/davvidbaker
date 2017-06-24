/**
 * Watches over the blog folder, triggering a rebuild on changes.
 */

const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch('./blog', {
  persistent: true,
});

// Something to use when events are received.
var log = console.log.bind(console);

watcher.on('change', path => {
  log(`${path} has changed`);

  const buildBlog = exec('npm run build-blog');
  
  buildBlog.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
  });

  buildBlog.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });
});

var
  gulp                = require('gulp'),
  config              = require('../config').watch,
  configTemplate      = require('../config').templates;
// Watch
gulp.task('watch', ['setwatch'], function() {

  // Watch .scss files
  gulp.watch(config.source.styles, ['styles']);

  // Watch .jade files
  gulp.watch(configTemplate.build + '+(layout|config|snippets|sections|templates|locales)/**');

  // Watch image folder
  gulp.watch(config.source.images, ['images']);

  // Watch .js files
  gulp.watch(config.source.scripts, ['scripts']);

  // Copy
  gulp.watch(config.source.copy, ['copy']);

  gulp.start('shopifywatch');

});
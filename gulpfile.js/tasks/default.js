var gulp                = require('gulp');
// Cleans build folder if present and builds
gulp.task('default', ['clean', 'bower'], function() {
  gulp.start('styles', 'scripts', 'images', 'copy' );
});
var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  // fonts and font icons
  gulp.src(config.font_src)
  .pipe(plugins.flatten())
  .pipe(gulp.dest(config.font_build));
});
var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').templates;

// Don't break watch on error
var onError = function (err) {
  plugins.util.beep();
  console.log(err);
  this.emit('end');
};

// Execute Jade Templates
gulp.task('templates', function() {
  return gulp.src(config.source)
    // Catch errors
    .pipe(plugins.plumber({errorHandler: onError}))

    // Only build changed files
    .pipe(plugins.changed(config.build, {extension: '.liquid'}))

    // Watch partials for change
    .pipe(plugins.jadeInheritance({basedir: config.base}))

    // Ignore build of files starting with _
    .pipe(plugins.filter(function (file) {
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))

    // Output Jad

    // Catch errors
    .pipe(plugins.plumber({errorHandler: onError}))

    // Rename to something usefull for Shopify
    .pipe(plugins.rename({

      extname: ".liquid"

    }))

    // Distribute to build path
    .pipe(gulp.dest(config.build))

    // Show notification
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'templates task complete' })));
});
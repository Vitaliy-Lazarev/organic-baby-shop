var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').images;

// Images
gulp.task('images', function() {
  return gulp.src(config.source)

    // Image optimization
    .pipe(plugins.image({
        pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: false,
		jpegoptim: true,
		mozjpeg: true,
		gifsicle: true,
		svgo: true,
		concurrent: 10
    }))

    // Distribute to build path
    .pipe(gulp.dest(config.build))

    // Show notification
    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Images task complete' })));
});
// Distribution paths
var
  app_path              = './app/',
  src_path              = app_path + 'src/',
  build_path            = app_path + 'build/',
  bower_components      = './bower_components/';

// Requirements, gulp plugins loaded  with gulp-load-plugins
var
  gulp                = require('gulp'),
  gulpLoadPlugins     = require('gulp-load-plugins'),
  plugins             = gulpLoadPlugins();

module.exports = {

  templates: {
    source: [
      src_path+'layout/*.liquid',
      src_path+'templates/**/*.liquid',
      src_path+'snippets/**/*.liquid',
      src_path+'sections/**/*.liquid'
    ],
    build: build_path,
    base: src_path
  },

  styles: {
    source: src_path+'assets/sass/*.scss',
    build: build_path + 'assets/',
    base: src_path
  },

  scripts: {
    source: [
      src_path+'assets/js/vendor/*.js',
      src_path+'assets/js/partials/*.js',
      src_path+'assets/js/*.js'
    ],
    build: build_path + 'assets/',
    base: src_path
  },

  images: {
    source: src_path+'assets/images/*',
    build: build_path + 'assets/',
    base: src_path
  },

  clean: {
    build: build_path + 'assets'
  },

  bower: {
    dest: bower_components
  },

  copy: {
    font_src: src_path+'assets/fonts/**/*',
    font_build: build_path+'assets/'
  },

  shopifywatch: {
    build_watch: build_path+'+(assets|layout|config|snippets|sections|templates|locales)/**',
    build: build_path
  },

  watch: {
    source: {
      styles: src_path+'assets/sass/**/*.scss',
      templates: src_path+'**/*.liquid',
      images: src_path+'assets/images/*',
      scripts: src_path+'assets/js/**/*.js',
      copy: [src_path+'assets/fonts/**/*',src_path+'config/**/*' ]
    }
  }
};

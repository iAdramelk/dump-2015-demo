'use strict';

var gulp         = require('gulp');
var plugins      = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

var stylesGlob  = [
  'bower_components/normalize.css/normalize.css',
  'blocks/*/**.css'
];

var htmlGlob  = [
  'pages/*.html'
];

var postcssGlob = [
  require('postcss-simple-vars')({ variables: require('./postcss/vars/colors') }),
  require('autoprefixer-core')
];

gulp.task('styles', function() {
  return gulp.src(stylesGlob)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.cached('styles'))
    .pipe(plugins.postcss(postcssGlob))
    .pipe(plugins.minifyCss())
    .pipe(plugins.remember('styles'))
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', ['styles'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', ['browser-sync'], function () {

  plugins.watch(htmlGlob, browserSync.reload);

  plugins.watch(stylesGlob, function(vinyl) {

    if (vinyl.event === 'unlink') {
      delete plugins.cached.caches.styles[vinyl.path];
      plugins.remember.forget('styles', vinyl.path);
    }

    gulp.start('styles');
  });

});

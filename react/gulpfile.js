'use strict';

var gulp         = require('gulp');
var plugins      = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

var glob = {
  styles: [
  'bower_components/normalize.css/normalize.css',
  'blocks/*/**.css'
  ],
  jsx: [
    'templates/*.jsx',
    'blocks/*/**.jsx',
    '../data/listing.json'
  ],
  templates: [
    'templates/*.jsx'
  ],
  html: [
  'pages/*.html'
  ],
  postcss: [
    require('postcss-simple-vars')({ variables: require('./postcss/vars/colors') }),
    require('autoprefixer-core')
  ]
};

gulp.task('styles', function() {
  return gulp.src(glob.styles)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.cached('styles'))
    .pipe(plugins.postcss(glob.postcss))
    .pipe(plugins.minifyCss())
    .pipe(plugins.remember('styles'))
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('jsx', function() {
  return gulp.src(glob.templates)
    .pipe(plugins.plumber())
    .pipe(plugins.render({
      template: './layouts/base.html',
      harmony: false,
      staticMarkup: true
    }))
    .pipe(gulp.dest('pages/'));

});

gulp.task('browser-sync', ['styles', 'jsx'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', ['browser-sync'], function () {

  plugins.watch(glob.html, browserSync.reload);

  plugins.watch(glob.styles, function(vinyl) {

    if (vinyl.event === 'unlink') {
      delete plugins.cached.caches.styles[vinyl.path];
      plugins.remember.forget('styles', vinyl.path);
    }

    gulp.start('styles');
  });

  plugins.watch(glob.jsx, function(){
    gulp.start('jsx');
  });

});

"use strict";

var gulp         = require("gulp");
var plugins      = require("gulp-load-plugins")();

var browserSync = require("browser-sync");

var glob = {
  styles: [
  "bower_components/normalize.css/normalize.css",
  "blocks/*/**.css"
  ],
  riot: [
    "blocks/*/**.tag"
  ],
  html: [
  "pages/*.html"
  ],
  postcss: [
    require("postcss-simple-vars")({ variables: require("./postcss/vars/colors") }),
    require("autoprefixer-core")
  ]
};

gulp.task("styles", function() {
  return gulp.src(glob.styles)
    .pipe(plugins.plumber())
    .pipe(plugins.postcss(glob.postcss))
    .pipe(plugins.concat("style.css"))
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("scripts", function() {
  return gulp.src(glob.riot)
    .pipe(plugins.plumber())
    .pipe(plugins.riot())
    .pipe(plugins.addSrc.prepend(["bower_components/riot/riot.js"]))
    .pipe(plugins.concat("script.js"))
    .pipe(plugins.header("var data = " + JSON.stringify(require("../data/listing.json")) + ";\n\n"))
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task("browser-sync", ["styles", "scripts"], function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("watch", ["browser-sync"], function () {

  plugins.watch(glob.html, browserSync.reload);

  plugins.watch(glob.styles, function(vinyl) {
    gulp.start("styles");
  });

  plugins.watch(glob.riot, function(){
    gulp.start("scripts");
  });

});

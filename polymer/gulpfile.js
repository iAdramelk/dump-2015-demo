"use strict";

var gulp        = require("gulp");
var plugins     = require("gulp-load-plugins")();

var browserSync = require("browser-sync");

var glob = {
  components: [
    'blocks/*/**.*'
  ],
  templates: [
    "templates/*.html"
  ],
  html: [
    "build/*.html",
    "pages/*.html"
  ]
};


gulp.task("tpl", function() {
  return gulp.src(glob.templates)
    .pipe(plugins.data(function () {
      return {data: require("../data/listing.json")};
    }))
    .pipe(plugins.template())
    .pipe(gulp.dest("pages/"));

});

gulp.task("vulcanize", function () {

    return gulp.src("layouts/base.html")
        .pipe(plugins.vulcanize({
            dest: "build/",
            strip: true
        }))
        .pipe(gulp.dest("build/"));
});

gulp.task("browser-sync", ["tpl", "vulcanize"], function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("watch", ["browser-sync"], function () {

  plugins.watch(glob.html, browserSync.reload);

  plugins.watch(glob.templates, function(){
    gulp.start("tpl");
  });

  plugins.watch(glob.components, function(){
    gulp.start("vulcanize");
  });


});

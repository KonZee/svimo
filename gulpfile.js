var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin');
    
var path = {};
path.src = "src/";
path.dest = "dist/"
path.images = path.src + "**/*.+(png|jpg|gif)";
path.svg= path.src + "**/*.svg";

gulp.task('imagemin', function(){
  return gulp.src(path.images)
  .pipe(imagemin())
  .pipe(gulp.dest(path.dest));
});

gulp.task('svgmin', function(){
  return gulp.src(path.svg)
  .pipe(svgmin())
  .pipe(gulp.dest(path.dest));
});

gulp.task('default', ['imagemin', 'svgmin']);

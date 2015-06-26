'use strict';

var DEST = 'dist/';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

var useref = require('gulp-useref'); // https://www.npmjs.com/package/gulp-useref

// gulp.src(['input/folder/**/*']).pipe(gulp.dest('output/folder'));


gulp.task('js', function() {
  return gulp.src('**/*.js')
    .pipe(jshint())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('default', function() {
});
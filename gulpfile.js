'use strict';

var DEST = 'dist/';

var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var compressor = require('gulp-compressor');

var csslint = require('gulp-csslint');
var prefix = require( 'gulp-autoprefixer' );

gulp.task('clean', function (cb) {
    del(DEST, cb);
});

gulp.task('scripts', function() {
    return gulp.src(['js/**/*.js','views/**/*.js'], { base: '.' })
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(compressor())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('css', function() {
    return gulp.src('css/*.css', { base: '.' })
        .pipe( prefix('last 3 versions'))
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(compressor())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('html', function(){
  return gulp.src(['*.html','views/*.html'], { base: '.' })
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('default',['clean'], function() {
    gulp.start('scripts', 'css', 'html');
});
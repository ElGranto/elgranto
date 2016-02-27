// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// include gulp-minify
var minify = require('gulp-minify');

// minify task
gulp.task('compress', function() {
  gulp.src('./js/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

// default gulp task
gulp.task('default', ['jshint', ''], function() {
});
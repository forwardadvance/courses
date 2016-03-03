'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');

var config = {
  "strict": false,
  "quotmark": false,
  "browser": true,
  "devel": true,
  "globals": {
    "$": true,
    "require": true
  }
};

var files = [
  '**/*.js',
  '!node_modules/**',
  '!gulpfile.js'
];

gulp.task('js:hint', function() {
  return gulp.src(files)
    .pipe(jshint(config))
    .pipe(jshint.reporter('default'));
    // .on('error', beep);
});

gulp.task('watch', function() {
  gulp.watch(files, ['js:hint']);
});

gulp.task('default', ['watch']);

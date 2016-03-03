// npm init
// npm install gulp

var gulp   = require('gulp');
var tslint = require('gulp-tslint');

var files = {
  ts: 'app/*.ts',
}

gulp.task('lint', function() {
  return gulp.src(files.ts)
    .pipe(tslint())
    .pipe(tslint.report("verbose"))
});

gulp.task('watch', function() {
  gulp.watch(files.ts, ['lint']);
});

gulp.task('default', [
  'watch'
]);


// .pipe(jshint())
// .pipe(jshint.reporter('default'))



// jshint = require('gulp-jshint');
// concat = require('gulp-concat'),
// uglify = require('gulp-uglify'),
// rename = require('gulp-rename'),

// .pipe(concat('app.js'))
// .pipe(gulp.dest(dirs.js))
// .pipe(rename('app.min.js'))
// .pipe(uglify())
// .pipe(gulp.dest(dirs.js))

// gulp.task('watch', function() {
//   gulp.watch(components.js, ['assets:js']);

// gulp.task('default', [
//   'watch'
// ]);

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');

const reload = browserSync.reload;
const BROWSER_SYNC_OPTIONS = {
    server: ['src', './'],
    port: 3000,
    open: false
};

gulp.task('sass', function () {
  gulp.src(['src/**/**/*.scss', '!src/**/**/_*.scss'])
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sass({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('scss', ['sass'])

gulp.task('pug', () => {
  return gulp.src(['src/pug/*.pug', '!src/pug/_*.pug'])
  .pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'pug'])

gulp.task('watch', () => {
  browserSync(BROWSER_SYNC_OPTIONS);

  gulp.watch('src/styles/**/*.scss', ['sass', reload]);
  gulp.watch('src/pug/*.pug', ['pug', reload]);
});

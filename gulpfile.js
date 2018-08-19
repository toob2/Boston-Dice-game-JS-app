const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('app/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css/'));
});

gulp.watch('app/scss/**/*.scss', ['sass']);


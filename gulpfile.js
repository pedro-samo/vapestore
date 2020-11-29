const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function sassCompilation() {
  return gulp
  .src('styles/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('build/'))
}

gulp.task('sass', sassCompilation);

function gulpJs() {
  return gulp
  .src('js/home/*.js')
  .pipe(concat('VapeStore-home.js'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('build/'))
}

gulp.task('mainjs', gulpJs);

function gulpWatch() {
  gulp.watch('styles/**/*.scss', sassCompilation)
  gulp.watch('js/**/*.js', gulpJs)
}

gulp.task('default', gulpWatch);
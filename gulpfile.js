const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const sass = require('gulp-sass')
const wait = require('gulp-wait')

gulp.task('default', ['scss']);

gulp.task('scss', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(wait(300))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('dist/'))
})

gulp.task('scss:watch', () => {
    gulp.watch('scss/**/*.scss', ['scss'])
})
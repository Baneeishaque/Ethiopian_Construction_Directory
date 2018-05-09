var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var bower = require('bower');
var del = require('del');
var gulp_bower = require('gulp-bower');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('ionic:build:before', function () {
  bower_reinstall();
  console.log(gulp.src('./resources/release-signing.properties').pipe(gulp.dest('./platforms/android/')));
});

gulp.task('ionic:watch:before', function () {
  bower_reinstall();
});

var bower_reinstall=function() {
  // console.log("Bower Libraries Directory : "+bower.config.cwd + "/" + bower.config.directory);  
  del(bower.config.cwd + "/" + bower.config.directory+'/**', {force:true});
  gulp_bower().pipe(gulp.dest(bower.config.cwd + "/" + bower.config.directory));
}
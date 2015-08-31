var gulp = require('gulp');
var babel = require('gulp-babel');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    gulp.src('src/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel())
        .pipe(sourceMaps.write(".", { sourceRoot: (__dirname + '/src')}))
        .pipe(gulp.dest("output"));
});
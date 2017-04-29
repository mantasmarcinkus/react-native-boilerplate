var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return gulp.src(['./src/**/*.{ts,tsx}'], { baseDir: './build',base: './src' })                     
        .pipe(tsProject())
        .pipe(gulp.dest('./build'));
});
gulp.task("watch", function () {
    gulp.watch(['./src/**/*.{ts,tsx}'], ['build']);
});
gulp.task("default", ['build', 'watch']);

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var tslint = require("gulp-tslint");

const src = ['./src/**/*.{ts,tsx}'];
gulp.task("tslint", () =>
    gulp.src(src)
        .pipe(tslint({
            formatter: "verbose"
        }))
        
         .pipe(tslint.report())
);

gulp.task("build", function () {
    return gulp.src(src, { baseDir: './build',base: './src' })                     
        .pipe(tsProject())
        .pipe(gulp.dest('./build'));
});

gulp.task("watch", function () {
    gulp.watch(src, ['tslint', 'build']);
});

gulp.task("default", ['build', 'tslint', 'watch']);

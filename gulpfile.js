const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const tslint = require("gulp-tslint");

// Typescript sources
const src = ['./src/**/*.{ts,tsx}'];
const dest = './build';

gulp.task("tslint", () =>
    gulp.src(src)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task("build", function () {
    return gulp.src(src, { baseDir: dest, base: './src' })
        .pipe(tsProject())
        .pipe(gulp.dest(dest));
});

gulp.task("watch", function () {
    gulp.watch(src, ['tslint', 'build']);
});

gulp.task("default", ['build', 'tslint', 'watch']);

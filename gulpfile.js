import gulp from "gulp";
import gulpsass from "gulp-sass";
import sass from "sass";
// import * as  sass from "sass";

import sourcemaps from "gulp-sourcemaps";

let sass$ = gulpsass(sass);

const isSourceMap = true;

const sourceMapWrite = isSourceMap ? "./" : false;

gulp.task("watch", function () {
	// SCSS path where code was written
	var scssFiles = "./src/assets/scss/**/*.scss";
	var cssDest = "./src/assets/css";
	// Normal file
	return gulp.src(scssFiles)
		.pipe(sourcemaps.init()) // To create map file we should need to initiliaze.
		.pipe(sass$.sync().on("error", sass$.logError)) // To check any error with sass sync
		.pipe(gulp.dest(cssDest))
		.pipe(sourcemaps.write(sourceMapWrite)) // To create map file
		.pipe(gulp.dest(cssDest));
});


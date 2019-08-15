var gulp = require('gulp');
	
var	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream');

var { gulpPaths } = require('./config.js');
const paths = gulpPaths;

gulp.task('js:build', () => {
	return browserify({
		entries: paths.sources.js,
		debug: true
	})
	.transform(babelify)
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('js:compile', () => {
	return gulp.src(`${paths.dest.js}/scripts.js`)
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest.js));
});

gulp.task('css:build', () => {
	return gulp.src(paths.sources.css)
		.pipe(concat('styles.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
	    .pipe(rename('styles.css'))
	    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('css:compile', () => {
	return gulp.src(`${paths.dest.css}/styles.css`)
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest(paths.dest.css));
});
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

gulp.task('sass', function(){
	gulp.src('resources/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('assets/css'))
	.pipe(livereload());
});

gulp.task('html-reload', function(){
	gulp.src('index.html')
	.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('resources/scss/**/*.scss', ['sass']);
	gulp.watch('index.html', ['html-reload']);
});

gulp.task('default', ['watch'])
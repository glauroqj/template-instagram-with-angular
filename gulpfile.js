var gulp = require('gulp'),
less = require('gulp-less'),
rename = require('gulp-rename'),
imagemin = require('gulp-imagemin'),
changed = require('gulp-changed'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
plumber = require('gulp-plumber'),
mincss = require('gulp-minify-css'),
browserSync = require('browser-sync');
mainBowerFiles = require('main-bower-files');
reload = browserSync.reload;

gulp.task('img-min', function() {
	gulp.src('app/src/images/*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('app/dist/images'))
});

gulp.task('less', function () {
	return gulp.src([
		'app/src/less/bootstrap.less',
		'app/src/less/carousel.less',
		'app/src/animate.less',
		'app/src/less/template.less'
		])
	.pipe(concat('all.css'))
	.pipe(plumber())
	.pipe(less())
	.pipe(mincss())
	.pipe(rename({
		suffix:'.min',
		basename: 'main'
	}))
	.pipe(gulp.dest('app/dist/css'))
	.pipe(browserSync.stream());
});

gulp.task('uglify', function () {
	gulp.src([
		'app/src/js/controller/home_factory.js'
		])
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(rename({
		suffix:'.min',
		basename: 'main'
	}))
	.pipe(gulp.dest('app/dist/js'))
});

gulp.task('main-bower', function() {
	return gulp.src(mainBowerFiles('**/*.js'))
	.pipe(gulp.dest('app/dist/libs'));
});

gulp.task('watch', function(){
	gulp.watch('app/src/less/*.less', ['less']);
	gulp.watch('app/src/js/*.js', ['uglify']);
	gulp.watch(['../*.html', 'views/*.html', '../*.js', 'src/js/**/*.js', 'src/js/controller/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: ['./views', './']
		}
	});
});

gulp.task('default',  ['img-min', 'less', 'uglify', 'main-bower', 'watch', 'serve']);
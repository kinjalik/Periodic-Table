'use strict';

const gulp                 = require('gulp');                  // Gulp Task Runner
const concat      			   = require('gulp-concat');           // CSS Concater (Объединение CSS)
const sourcemaps  			   = require('gulp-sourcemaps');       // CSS Sourcemaps (Создание карт изменеий)
const debug       			   = require('gulp-debug');            // Debug messages (Кастомные дебаг-сообщения)
const postcss      				 = require('gulp-postcss');          // PostCSS Processor (CSS-процессор)
const gulpIf   				     = require('gulp-if');               // Gulp IF operator (условный оператор для Gulp)
const csso         				 = require('gulp-csso');             // CSS Minifier (Минификатор CSS)
const autoprefixer 				 = require('autoprefixer');          // CSS Autoprefixer (Расстановка вендорных префиксов)
const imagemin    				 = require('gulp-imagemin');         // Minify images
const del          				 = require('del');                   // NPM File Deleter (Удаление файлов)
const newer        				 = require('gulp-newer');            // Not editing old files (Исключение старых файлов их потока)
const pump         				 = require('pump');                  // Library for Uglify
const uglify       				 = require('gulp-uglify');           // Minifing JS (Минимизация JS)
const plumber      				 = require('gulp-plumber');          // Error handler (Обработка ошибок)
const notifier             = require('node-notifier');         // Notifier
const browserSync  				 = require('browser-sync').create(); // Browser-Sync

const path                 = require('path');
const isDevelopment 			 = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('html', function() {
	return gulp.src('src/**/*.html', { since: gulp.lastRun('styles') })
		.pipe(newer('dist'))
		.pipe(debug({title: 'HTML moved'}))
		.pipe(gulp.dest('dist'))
})

gulp.task('styles', function() {
	return gulp.src('src/css/**/*.css', { since: gulp.lastRun('styles') })
		.pipe(newer('dist/css'))
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(gulpIf(!isDevelopment, function() {
			postcss([ autoprefixer ({ browsers: ['last 50 versions'] }) ])
		}))
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulpIf(!isDevelopment, function() {
			csso()
		}))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('dist/css'))
})

gulp.task('images-main', function() {
	return gulp.src('src/images/**/*.*', { since: gulp.lastRun('images-main') })
		.pipe(newer('dist/images'))
		.pipe(gulpIf(!isDevelopment, function() {
			imagemin([
				imagemin.gifsicle({interscaled: true}),
				imagemin.optipng({optimizationLevel: 5})
			])
		}))
		.pipe(debug({title: 'ImagesMoved'}))
		.pipe(gulp.dest('dist/images'))
})

gulp.task('js', function() {
	return gulp.src('src/js/**/*.*')
		.pipe(gulpIf(!isDevelopment, function() {
			uglify()
		}))
		.pipe(gulp.dest('dist/js'))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/*.*')
		.pipe(debug({title: 'Fonts Moved'}))
		.pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean', function() {
	return del('dist');
})

gulp.task('server', function() {
	browserSync.init({
		server: 'dist',
		notify: false
	})
	browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
	notifier.notify({
	  title: 'Browser-Sync',
	  message: 'Watcher started successful',
	  sound: 'frog',
	  wait: false 
	});
})

gulp.task('watch', function() {
	gulp.watch('src/**/*.html', gulp.series('html'));
	gulp.watch('src/css/**/*.*', gulp.series('styles'));
	gulp.watch('src/js/**.*', gulp.series('js'));
	gulp.watch('src/css/**.{png,svg,jpg,jpeg}');
	gulp.watch('src/fonts/**.*', gulp.series('fonts'));
	gulp.watch('src/images/**.*', gulp.series('images-main'));
})

gulp.task('build',gulp.series('clean',gulp.parallel('styles','images-main','js','fonts','html')));


gulp.task('start',gulp.series('build',gulp.parallel('server','watch')));

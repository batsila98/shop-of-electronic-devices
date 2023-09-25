const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    fileinclude = require('gulp-file-include');

// project structure
const app = 'app/',
    dist = 'dist/';

const config = {
    app: {
        html: app + 'html/**/*.html',
        style: app + 'scss/**/*.scss',
        js: app + 'js/**/*.*',
        fonts: app + 'fonts/**/*.*',
        images: app + 'images/**/*.*',
    },
    dist: {
        html: dist,
        style: dist + 'assets/css/',
        js: dist + 'assets/js/',
        fonts: dist + 'fonts/',
        images: dist + 'images/',
    },
    watch: {
        html: app + 'html/**/*.html',
        style: app + 'scss/**/*.scss',
        js: app + 'js/**/*.*',
        fonts: app + 'fonts/**/*.*',
        images: app + 'images/**/*.*',
    }
};

// Web Server
const webServer = () => {
    browserSync.init({
        server: {
            baseDir: dist
        },
        port: 9000,
        host: 'localhost',
        notify: false
    })
};

// Tasks
const htmlTask = () => {
    return gulp.src(config.app.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(config.dist.html))
        .pipe(browserSync.reload({ stream: true }))
};

const scssTask = () => {
    return gulp.src(['app/scss/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(config.dist.style))
        .pipe(browserSync.reload({ stream: true }))
};

const jsTask = () => {
    return gulp.src(config.app.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.dist.js))
        .pipe(browserSync.reload({ stream: true }))
};

const imagesTask = () => {
    return gulp.src(config.app.images)
        .pipe(gulp.dest(config.dist.images))
        .pipe(browserSync.reload({ stream: true }))
};

const fontsTask = () => {
    return gulp.src(config.app.fonts)
        .pipe(gulp.dest(config.dist.fonts))
        .pipe(browserSync.reload({ stream: true }))
};

// Watch
const watchFiles = () => {
    gulp.watch([config.watch.html], gulp.series(htmlTask));
    gulp.watch([config.watch.style], gulp.series(scssTask));
    gulp.watch([config.watch.js], gulp.series(jsTask));
    gulp.watch([config.watch.fonts], gulp.series(fontsTask));
    gulp.watch([config.watch.images], gulp.series(imagesTask));
};

// start
const start = gulp.series(htmlTask, scssTask, jsTask, fontsTask, imagesTask);

// Run parallel
exports.default = gulp.parallel(start, watchFiles, webServer);
//initializing modules

const {src, dest, watch, series, parallel} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


//files path variables
const files = {
    scssPath:"sass/**/*.scss",
    jsPath:"js/**/*.js"
}

//sass task

function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer('last 4 version'), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dest/css'));
};

// js task
function jsTask(){
    return src(files.jsPath)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dest/js'));
};


// watch task

function watchTask(){
    watch([files.scssPath, files.jsPath], parallel(scssTask, jsTask));
}


exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
)
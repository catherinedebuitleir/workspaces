const gulp = require('gulp')
const del = require('del')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const nunjucks = require('gulp-nunjucks-render')
const imagemin = require('gulp-imagemin')

paths_styles_css_src = './assets/css/**/*.css'
paths_styles_css_dest = './public/css/'

paths_scripts_src = './assets/js/**/*.js'
paths_scripts_dest = './public/js/'

paths_views_src = './pages/**/*.njk'
paths_views_dest = './public/'

paths_images_src = './assets/images/**/*'
paths_images_dest = './public/images'

// // a dead simple css
function css() {
  return gulp.src(paths_styles_css_src)
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths_styles_css_dest))
    .pipe(browserSync.stream())
}

// /**
//  * js copy and move
//  */
function scripts() {
  return gulp.src(paths_scripts_src)
    .pipe(gulp.dest(paths_scripts_dest))
}

// /**
//  * Injects each page into main layout template. Use partials to specify global objects
//  */
function views() {
  return gulp.src(paths_views_src)
    .pipe(nunjucks({
      path: ['pages/', 'public/'] // Public is required for SVG icons referrence
    }))
    .pipe(gulp.dest('./public/'))
}


function images(){
  return gulp.src(paths_images_src)
  .pipe(imagemin())
  .pipe(gulp.dest(paths_images_dest))
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./public/",
      index: "index.html"
    }
  })
  gulp.series([clean, views, trim])
}

function reload(done) {
  browserSync.reload()
  gulp.series([trim])
  done()
}

function watch() {
  gulp.watch(paths_scripts_src, gulp.series(scripts, reload))
  gulp.watch(paths_styles_css_src, css)
  gulp.watch(paths_views_src, gulp.series(views, reload))
  gulp.watch(paths_images_src, gulp.series(images, reload))
}

function clean() {
  del(['./public/**/*.html', './public/**/*.js', 'public/**/*.css'])
}

function trim() {
  del(['./public/page_components/', './public/bootstrap_components/', './public/partials/'])
}

exports.default = gulp.parallel(serve, scripts, css, views, images, watch, reload, trim)
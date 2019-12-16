////////////////////////////////////////////////////
// ToDo
////////////////////////////////////////////////////
// - compileJs
// - - buffer
// - - uglify
// - - sourcemaps
// - - linting
// - - es6?
////////////////////////////////////////////////////

const gulp = require( 'gulp' );
const babelify = require( 'babelify' );
const browserify = require( 'browserify' );
const browserSync = require( 'browser-sync' ).create();
const log = require( 'fancy-log' );
const sourcemaps = require( 'gulp-sourcemaps' );
const uglify = require( 'gulp-uglify' );
const buffer = require( 'vinyl-buffer' );
const source = require( 'vinyl-source-stream' );
const del = require( 'del' );
const mocha = require('gulp-mocha');

// directories
const dirs = require( './gulp/dirs' ).dirs;
const clean = require( './gulp/cleanDirs' ).clean;
const compileHtml = require( './gulp/compileHtml' ).compileHtml;
const moveHtml = require( './gulp/moveHtml' ).moveHtml;

const compileJs = require( './gulp/compileJs' ).compileJs;

const vendorJs = require( './gulp/vendorJs' ).vendorJs;

const moveData = require( './gulp/moveData' ).moveData;

const sass = require( './gulp/sass' ).sass;





// browsersync reload function
function reload( done ) {
    browserSync.reload();
    done();
}

// browsersync file watcher
function watch(){
	browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        open: false,
        server: {
            baseDir: "./dist/"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    browserSync.reload();

    gulp.watch( dirs.src.scss , gulp.series( sass, browserSync.stream() ) );
    gulp.watch( dirs.src.js, gulp.series( compileJs, reload ) );
    gulp.watch( dirs.src.templates, gulp.series( compileHtml, reload ) );
}
    
// expose task to cli
exports.watch = watch;



// testing
function tests() {
	return (
		gulp
			.src( './test/tests.js', { read: false } )
			.pipe( mocha( {reporter: 'nyan' } ) )
	);
}

// expose task to cli
exports.tests = tests;



// build task
exports.build = gulp.series( gulp.series( clean ),  gulp.parallel( vendorJs, compileJs, compileHtml, moveHtml, moveData, sass ) );
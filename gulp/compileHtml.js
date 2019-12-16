const gulp = require( 'gulp' );
const nunjucksRender = require('gulp-nunjucks-render');
const dirs = require( '../gulp/dirs' ).dirs;

// compile templates (nunjucks)
function compileHtml(){
	return (
		gulp
			.src( dirs.src.templates )
			.pipe( nunjucksRender( {
	      		path: 'src/templates/'
		    } ) )
		    .pipe( gulp.dest( dirs.dist.html ) )
	);
};

// expose task to cli	
exports.compileHtml = compileHtml;
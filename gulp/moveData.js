const gulp = require( 'gulp' );
const dirs = require( '../gulp/dirs' ).dirs;

// move data
function moveData(){
	return (
		gulp
			.src( dirs.src.data )
    		.pipe( gulp.dest( dirs.dist.data ) )
	);
}

// expose task to cli	
exports.moveData = moveData;
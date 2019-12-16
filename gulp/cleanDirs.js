const del = require( 'del' );
const dirs = require( '../gulp/dirs' ).dirs;

// clean dist folders
function clean(){
	return (
		del( [ dirs.distDir ] )
	);
};

// expose task to cli	
exports.clean = clean;
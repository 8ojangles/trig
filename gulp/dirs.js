// node modules
let nodeModules = './node_modules';

// vendor libraries
let vendorLibs = [
	`${nodeModules}/jquery/dist/jquery.min.js`,
	`src/js/rafPolyfill.js`
];


// SOURCE directory top level
let srcDir = 'src';

// src files
let src = {
	html: [ './*.html' ],
	templates: [ `${ srcDir }/templates/pages/*.njk`, `${ srcDir }/templates/pages/*.html` ],
	jsBundleEntry: [ `${ srcDir }/js/entry.js` ],
	js: [ `${ srcDir }/js/**/*.js` ],
	scss: [ `${ srcDir }/scss/**/*.scss` ],
	data: [ `${ srcDir }/data/**/*.json` ]
};


// DISTRIBUTION directory top level
let distDir = './dist/';

// dist folders
let dist = {
	html: [ `${ distDir }/` ],
	js: [ `${ distDir }js/` ],
	css: [ `${ distDir }css/` ],
	data: [ `${ distDir }data/` ]
};



// directory collection
let dirs = {
	nodeModules : nodeModules,
	vendorLibs: vendorLibs,
	srcDir: srcDir,
	src: src,
	distDir: distDir,
	dist: dist
}


// export dirs
module.exports.dirs = dirs;
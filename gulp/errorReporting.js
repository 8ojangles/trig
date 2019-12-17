const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

function plumbError() {
	return plumber({
		errorHandler: function(err) {
			notify.onError(
				{
					templateOptions: {
						date: new Date()
					},
					title: "Gulp error in " + err.plugin,
					message:  err.formatted
				}
			)(err);
			this.emit('end');
		}
	})
};

module.exports.plumbError = plumbError;
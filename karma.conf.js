module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		files: [
			'src/App.vue',
			'test/*Spec.js'
		],
		browsers: ['Chrome'],
		logLevel: config.LOG_DEBUG
	})
}

module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,html,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
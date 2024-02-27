module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,html,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
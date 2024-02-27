module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,png,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
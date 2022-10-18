module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: 'google',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['warn', 4],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'max-len': ['warn', { code: 360 }],
		'linebreak-style': ['warn', 'windows'],
		'object-curly-spacing': ['warn', 'always'],
		'space-before-function-paren': ['warn', 'always'],
		'require-jsdoc': 0,
		'valid-jsdoc': 0,
	},
};


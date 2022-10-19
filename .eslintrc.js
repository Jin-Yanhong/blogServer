module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: 'eslint:recommended',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'indent': ['warn', 4],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'max-len': ['warn', { code: 360 }],
        'linebreak-style': ['warn', 'windows'],
        'object-curly-spacing': ['warn', 'always'],
        'require-jsdoc': 0,
        'valid-jsdoc': 0,
    },
};

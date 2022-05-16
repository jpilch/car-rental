module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'commonjs': true,
        'es2021': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error', {
                'before': true, 'after': true
            }
        ],
        'no-trailing-spaces': 'error'
    }
}

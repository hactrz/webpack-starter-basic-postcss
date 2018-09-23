const path = require('path')

module.exports = {
    plugins: {
        'postcss-import': {
            path: [
                path.resolve(__dirname, 'src/styles'),
                'node_modules',
            ],
        },
        'postcss-url': {},
        'postcss-custom-properties': {preserve: false},
        'postcss-preset-env': {stage: 0},
        'postcss-calc': {},
        'postcss-browser-reporter': {},
        'postcss-reporter': {},
    },
}

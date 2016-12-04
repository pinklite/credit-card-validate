const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const babelOptions = {
    "presets": [
        [
            "es2015",
            {
                "modules": false
            }
        ]
    ],
    "plugins": [
        "external-helpers",
        "transform-flow-strip-types"
    ]
};

rollup.rollup({
    entry: 'src/app.js',
    plugins: [
        babel(babelOptions),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        dest: './dist/credit-card-validate.js',
        moduleName: 'CardValidate',
    });

    bundle.write({
        format: 'es',
        dest: './dist/credit-card-validate.es.js',
        moduleName: 'CardValidate',
    });
});

rollup.rollup({
    entry: 'src/app.js',
    plugins: [
        babel(babelOptions),
        uglify(),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        dest: './dist/credit-card-validate.min.js',
        moduleName: 'CardValidate',
    });
});

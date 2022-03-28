const path = require('path')
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

console.log(path.resolve(__dirname, 1 + '/src/bootstrap.js'))
module.exports = (env) => ({
  entry: {
    bootstrap: path.resolve(__dirname, env.home + '/src/bootstrap.js'),
    core: path.resolve(__dirname, env.home + '/src/core.js'),
    // form: path.resolve(__dirname, env.home + '/src/form.js'),
  },
  output: {
    path: path.resolve(__dirname, env.home + '/dist'),
    filename: 'pingyo.[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    clean: true,
    libraryTarget: "umd2",
    // library: {
    //   type: "module",
    // },
    // environment: {
    //   module: true,
    //   dynamicImport: true,   // Note you need to enable `dynamicImport ` here
    // },
  },
  // experiments: { outputModule: true },
  // externalsType: "import",
  externalsType: "script",
  externals: {
    '/1/dist/pingyo.core.bundle.js': ['http://127.0.0.1:8081/1/dist/pingyo.core.bundle.js', 'core'],
    'bootstrap.js': ['/1/dist/pingyo.bootstrap.bundle.js', 'pingyo'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              // [
              //   "@babel/plugin-transform-modules-umd",
              //   {
              //     "globals": {
              //       "es6-promise": "Promise",
              //       "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js",
              //     }
              //   }
              // ],
              [
                "@babel/plugin-transform-runtime",
                {
                  "regenerator": true,
                  // "corejs": 3, // or 2; if polyfills needed
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // new NodePolyfillPlugin(),

    // new WebpackConcatPlugin({
    //   bundles: [
    //     {
    //       dest: path.resolve(__dirname, env.home + '/PTBootstrap.cshtml'),
    //       src: [
    //         path.resolve(__dirname, env.home + '/src/PTBootstrap.cshtml'),
    //         path.resolve(__dirname, env.home + '/dist/pingyo.bootstrap.bundle.js'),
    //       ],
    //     },
    //     {
    //       dest: path.resolve(__dirname, env.home + '/PTCore.cshtml'),
    //       src: [
    //         path.resolve(__dirname, env.home + '/src/PTCore.cshtml'),
    //         path.resolve(__dirname, env.home + '/dist/pingyo.core.bundle.js'),
    //       ],
    //     },
    //   ],
    // }),
  ],
});

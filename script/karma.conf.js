var pkg = require('../package')

module.exports = function (config) {
  config.set({
    basePath: '../',

    frameworks: ['mocha', 'power-assert'],

    files: [
      'src/index.js',
      'test/*.test.js'
    ],

    exclude: [],

    preprocessors: {
      'src/index.js': 'webpack'
    },

    webpack: {
      devtool: 'inline-source-map',
      output: {
        library: pkg.name,
        libraryTarget: 'umd'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
                plugins: ['istanbul']
              }
            },
            exclude: /node_modules/
          }
        ]
      }
    },

    reporters: ['mocha', 'coverage'],

    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: '.'
      // Would output the results into: .'/coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

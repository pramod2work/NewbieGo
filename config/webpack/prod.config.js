const { DefinePlugin, optimize, LoaderOptionsPlugin } = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./base.config.js')
const { dependencies } = require('../../package.json')
const { root } = require('../helpers')


/**
 * Webpack2 allows for a function to be exported. This function will
 * be a representation of the command line's --env objects. This allows
 * us to write customisations logically using the env object.
 */
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  /**
   * Create our config object. We are using Object.assign to create a new object
   * as opposed to mutating our base configuration as we may use the base configuration
   * multiple times in different ways and a mutation will break the expected result.
   */
  // TODO: update from Object.assign({}, conf1, conf2) to {...conf1, conf2 } once the spec allows
  const config = Object.assign({}, baseConfig,
    /**
     * Config Overwrites and unset values, If you need to
     * modify an existing value without complete overwrite,
     * update the config object's references after the object
     * assign call.
     */
    {
      entry: Object.assign({}, baseConfig.entry, {
        vendor: Object.keys(dependencies).filter(key => ![
          // Babel-polyfill will be loaded in app bundle, its excluded as it will fail with common chunks bundle for IE
          'babel-polyfill',
        ].includes(key))
      }),
      devtool: 'hidden-source-map',
      module: Object.assign({}, baseConfig.module,
        {
          rules: [
            ...baseConfig.module.rules,
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader',
              })
            }
          ]
        }),
      plugins: [
        ...baseConfig.plugins,
        /**
         * Set environment variable to production OR retain env value
         */
        new DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        /**
         * Loader Options
         */
        new LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        /**
         * Minfication
         */
        new optimize.UglifyJsPlugin({
          sourceMap: true,
          beautify: false,
          mangle: {
            screw_ie8: true,
            keep_fnames: true
          },
          compress: {
            screw_ie8: true
          },
          comments: false
        }),
        /**
         * Common Chunks
         */
        new optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function(module){
            return module.context && module.context.indexOf('node_modules') !== -1
          }
        }),
        new optimize.CommonsChunkPlugin({
          name: 'manifest',
          minChunks: Infinity
        }),
      ]
    }
  )

  /** Return our config object */
  return config
}
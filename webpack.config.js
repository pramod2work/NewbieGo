/**
 * Webpack2 allows for a function to be exported. This function will
 * be a representation of the command line's --env objects. This allows
 * us to write customisations logically using the env object.
 */
module.exports = (options = {}) => {
  switch (options.environment) {
    case 'production':
      return require('./config/webpack/prod.config.js')(options)
    case 'ci':
      return require('./config/webpack/prod.config.js')(options)
    case 'dll':
      return require('./config/webpack/dll.config.js')(options)
    case 'development':
    default:
      return require('./config/webpack/dev.config.js')(options)
  }
}

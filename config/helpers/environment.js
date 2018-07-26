// get available environment setting

module.exports = ((env = process.env.NODE_ENV) => {
  switch (env) {
    default:
      return 'localhost'
  }
})()

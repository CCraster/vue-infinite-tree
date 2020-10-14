const isProduction = process.env.NODE_ENV === 'production'
const isBuildLib = process.env.BUILD_LIB

const webpackConfig = config => {
  if (isProduction) {
    config.optimization.minimizer[0].options.terserOptions.compress = {
      ...config.optimization.minimizer[0].options.terserOptions.compress,
      warnings: false,
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log']
    }
  }
  return {
    devtool: isProduction ? 'none' : 'source-map'
  }
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-infinite-tree/' : '/',
  outputDir: isBuildLib ? 'lib' : 'docs',
  configureWebpack: webpackConfig
}

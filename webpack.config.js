const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: '/src/index.js',
  externals: [nodeExternals()],
  optimization: {
    namedModules: true,
    namedChunks: true,
    minimize: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}

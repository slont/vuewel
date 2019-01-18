require('@babel/register')
require('babel-loader')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ['./src/scss/global.scss'],
              include: path.resolve(__dirname, '../')
            }
          }],
        include: path.resolve(__dirname, "../")
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss']
  },
  plugins: [new VueLoaderPlugin()]
}

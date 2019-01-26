const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/scss/global.scss'],
              include: path.resolve(__dirname, '../')
            }
          }],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss']
  }
}

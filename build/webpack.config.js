const path = require('path')
const fs = require('fs')
const {VueLoaderPlugin} = require('vue-loader')

const root = './src/components'
const entry = {
  'vuewel': './src/index.js',
  'components/index': [`${root}/index`]
}
const files = fs.readdirSync(root)
files.forEach(component => {
  if (fs.statSync(path.join(root, component)).isDirectory()) {
    const entryKey = `components/${component}/index`
    const entryValue = `${root}/${component}/index`
    entry[entryKey] = [entryValue]
  }
})

module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'Vuewel'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
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
    extensions: ['.js', '.ts', '.vue', '.json', 'scss']
  },
  plugins: [new VueLoaderPlugin()]
}

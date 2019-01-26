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
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'Vuewel',
    libraryTarget: 'umd',
    globalObject: '(typeof window !== \'undefined\' ? window : this)'
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
        loader: 'vue-loader',
        options: {
          loaders: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
        }
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['isomorphic-style-loader', 'css-loader', 'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/scss/constants.scss'],
              include: path.resolve(__dirname, '../')
            }
          }],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json', 'scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@components': path.resolve(__dirname, '../src/components')
    }
  },
  plugins: [new VueLoaderPlugin()]
}

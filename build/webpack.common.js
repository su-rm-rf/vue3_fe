const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  context: resolve(__dirname, '../src'),
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env', {
                      browsers: [
                        'defaults',
                        'not ie < 9',
                        'last 7 versions',
                        '> 1%',
                        'iOS >= 8',
                        'last 5 iOS versions',
                        'android >= 6.0',
                        // 'not dead',
                        // 'not op_mini all',
                      ]
                    }
                  ]
                ]
              }
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js', '.json', '.scss'],
    alias: {
      '@': join(__dirname, '../src/client')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // chunkFilename: '[name].[chunkhash:8].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: resolve(__dirname, '../public'), to: resolve(__dirname, '../dist')}
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
}
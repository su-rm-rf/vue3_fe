const webpackNodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

const client = {
  entry: './admin/client/main.tsx',
  output: {
    path: resolve(__dirname, '../dist/admin'),
    filename: 'client.bundle.js',
    // chunkFilename: '[name].[chunkhash:8].css',
    publicPath: '/admin/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.isClient': true,
      'process.env.isSSR': false,
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      
    }
  },
  target: 'web',
}

const ssr = {
  entry: './admin/client/main.tsx',
  output: {
    path: resolve(__dirname, '../dist/admin'),
    filename: 'client.bundle.js',
    // chunkFilename: '[name].[chunkhash:8].css',
    publicPath: '/admin/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.isClient': false,
      'process.env.isSSR': true,
    })
  ],
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ]
  },
  target: 'node',
}

module.exports = {
  client_prod: client, 
  ssr_prod: ssr,
}
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  components: 'src/**/*.component.js',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        // {
        //   test: /\.css$/,
        //   use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use:
        //       'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        //   })
        // },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            'css-loader'
          ]
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    plugins: [
      // new ExtractTextPlugin('styles.css')
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  }
};

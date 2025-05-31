const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      clean: true,
      publicPath: isDev ? '/' : '/spadecompany/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.module\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  namedExport: false,
                  localIdentName: '[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({ template: './public/index.html' }),
      new webpack.EnvironmentPlugin({
        PUBLIC_URL: isDev ? '/' : '/spadecompany',
      }),
    ],
    resolve: { extensions: ['.js', '.jsx', '.scss', '.css'] },
    devServer: {
      static: './public',
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};

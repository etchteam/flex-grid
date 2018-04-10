import ExtractTextPlugin from 'extract-text-webpack-plugin';

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map'; // enables source map
  }

  return false;
}

module.exports = {
  entry: {
    main: './demo/index.js',
  },
  output: {
    filename: './demo/bundle.js',
  },
  devtool: getDevTool(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('dist/main.css', {
      allChunks: true,
    }),
  ],
};

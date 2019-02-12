const path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './web/client/src/concept-node.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
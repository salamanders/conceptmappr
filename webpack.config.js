const path = require('path');

module.exports = {
  resolve:{
    alias:{
      'lit-element': path.resolve(__dirname, './node_modules/lit-element/')
    }
  },

  entry: './src/concept-node.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
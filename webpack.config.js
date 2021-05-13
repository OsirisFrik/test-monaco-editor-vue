const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [
    new MonacoEditorWebpackPlugin({
      languages: ['javascript']
    })
  ]
}
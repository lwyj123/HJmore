var path = require('path');
module.exports = {
  entry: "./HJmore.js",//入口文件
  output: {//打包输出的文件
    path: path.resolve(__dirname, 'dist'),
    filename: "HJmore.js"
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['.js', '.json', '.coffee']
  }
};
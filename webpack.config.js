module.exports = {
  entry: "./src/app.js",
  mode: "none",
  module: {
    rules: [
      {
        // js 확장자로 끝나는 파일은 babel-loader가 처리하도록 설정.
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

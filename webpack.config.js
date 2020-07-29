const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 7000,
  },
  mode: "development",
};

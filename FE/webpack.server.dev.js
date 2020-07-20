const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

const entryFile = path.resolve(__dirname, "src", "server.js");

const config = {
  mode: "development",
  entry: {
    main: entryFile,
  },
  output: {
    filename: `[name].js`,
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};

module.exports = config;

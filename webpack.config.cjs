// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: { index: "./src/js/index.js", pets: "./src/js/pets.js" },
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles: [path.join(__dirname, "index.html")],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      chunks: ["index"],
      favicon: "./src/assets/favicon/favicon-32x32.png",
    }),
    new HtmlWebpackPlugin({
      filename: "pets.html",
      template: "pets.html",
      chunks: ["pets"],
      favicon: "./src/assets/favicon/favicon-32x32.png",
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/", to: "./assets" },
        { from: "./src/json", to: "./json" },
      ],
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "esnext",
        css: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "esbuild-loader",
        options: { target: "esnext" },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  config.experiments = {
    topLevelAwait: true,
  };
  return config;
};

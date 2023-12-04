const HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ["file-loader"],
        type: "javascript/auto",
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

pages = [
  "index",
  "lesson12",
  "lesson14",
  "lesson15"
]

module.exports = {
  mode: "production",
  entry: pages.reduce((acc, page) => ({...acc, [page]: `./src/static/js/${page}.js`}), {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].bundle.js",
    // publicPath: '/dist/static/js/',
    clean: true,
    assetModuleFilename: "static/assets/[name].[hash][ext]"
  },
  devServer: {
    port: 8090,
    open: true,
    historyApiFallback: true,
    static: "./dist/templates",
    devMiddleware: {
      writeToDisk: true
    }
  },
  // resolve: {
  //   alias: {
  //     // "~/": "./templates"
  //     // Templates: path.resolve(__dirname, 'src/templates/'),
  //   }
  // },
  module: {
    rules: [
      {
        test: /[.]html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /[.]css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /[.](gif|png|avif|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /[.](ogg|mp3|wav|mpe?g)$/i,
        type: "asset/resource"
      },
      {
        test: /[.]m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [].concat(
    pages.map(
      page =>
        new HtmlWebpackPlugin({
          inject: true,
          template: path.resolve(__dirname, `src/templates/${page}.html`),
          filename: `templates/${page}.html`,
          chunks: [page]
        })
    ),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css"
    })
  ),
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [new TerserPlugin({
      extractComments: false
    })]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512_000,
    maxAssetSize: 512_000
  }
}
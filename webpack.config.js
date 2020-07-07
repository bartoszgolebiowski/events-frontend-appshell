const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "events",
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/import-map.json",
            to: "./",
          },
        ],
      }),
    ],
  });
};

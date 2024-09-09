const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "barclays",
    projectName: "mortgage-application",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // externals: ["@barclays/app-setup-utils"],
    // modify the webpack config however you'd like to by adding to this object
  });
};

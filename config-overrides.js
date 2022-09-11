const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
} = require("customize-cra-5");
const path = require("path");

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#A80000' },
      }
    })
  )
}

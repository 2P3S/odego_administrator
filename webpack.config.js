const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@Styles": path.resolve(__dirname, "src/styles"),
    },
  },
};

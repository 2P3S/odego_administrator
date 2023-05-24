const path = require("path");

module.exports = {
  // ...
  webpack: {
    alias: {
      /* ... */
      "@Common": path.resolve(__dirname, "src/components/common/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Datas": path.resolve(__dirname, "src/datas/"),
    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ],
    },
    configure: {
      /* ... */
    },
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      return webpackConfig;
    },
  },
};

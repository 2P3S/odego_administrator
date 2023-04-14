const path = require("path");

module.exports = {
  // ...
  webpack: {
    alias: {
      /* ... */
      "@Components": path.resolve(__dirname, "src/components/"),
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

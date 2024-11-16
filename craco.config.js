const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
};
// Please remember to modify tsconfig.json when alias is changed

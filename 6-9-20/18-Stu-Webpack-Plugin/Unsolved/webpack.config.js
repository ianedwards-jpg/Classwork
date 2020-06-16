const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: "public/assets/js/app.js",
    filename: "/public/dist/"
  },
  mode: "development",
  plugins: [WebpackPwaManifest]
};

module.exports = config;

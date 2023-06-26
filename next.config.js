/** @type {import('next').NextConfig} */
const path = require("path");
const withPlugins = require("next-compose-plugins");
const { withExpo } = require("@expo/next-adapter");

const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",
  "@expo/vector-icons",
  "@legendapp/motion",
  "@gluestack-style/react",
  "@gluestack-style/animation-plugin",
  "react-native-svg",
  "@react-native-aria/interactions",
  "@react-native-aria/overlays",
  "@react-native-aria/utils",
  // "@gluestack-ui/actionsheet",
  "@gluestack-ui/toast",
  "@gluestack-ui/button",
  "@gluestack-ui/hooks",
  "@gluestack-ui/overlay",
  "@gluestack-ui/provider",
  "@gluestack-ui/transitions",
  "@gluestack-ui/utils",
]);
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };

    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader",
    });

    return config;
  },
};

module.exports =
  // nextConfig
  withPlugins([[withExpo], [withTM]], {
    ...nextConfig,
  });

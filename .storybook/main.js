module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    // 'storybook-addon-material-ui'
  ],
  babel: async (options) => {
    // options["presets"].push([
    //   "@babel/preset-react",
    //   { "runtime": "automatic", "importSource": "@emotion/react" }
    // ])
    //
    // options["plugins"].push("@emotion/babel-plugin")
    return options
  }
}

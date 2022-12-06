const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
/*module.exports = {
  alias: {
    "@": ".",
    "@src": "src",
    "@components": "src/components",
    "@scss": "scss",
    "@mixins": "scss/mixins",
    "@utils": "scss/utils",
    "@routes": "src/router",
    "@views": "src/views",
  },
};
*/
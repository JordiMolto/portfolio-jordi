import { resolve } from 'path'

module.exports = {
  alias: {
    "@": ".",
    "@src": "src",
    "@components": resolve(__dirname, './src/components'),
    "@scss": "src/scss",
    "@mixins": "src/scss/mixins",
    "@utils": "src/scss/utils",
    "@routes": "src/router",
    "@views": "src/views",
  },
};

一个基于Vue3和Express的SSR服务端渲染项目

# dependency
webpack:
  webpack webpack-cli webpack-merge webpack-node-externals copy-webpack-plugin
ts: 
  typescript ts-loader
vue3:
  vue vue-router vuex pinia
  vue-loader
css:
  css-loader sass sass-loader postcss postcss-loader postcss-preset-env mini-css-extract-plugin css-minimizer-webpack-plugin
js:
  terser-webpack-plugin
http:
  axios
system: 
  cross-env dotenv
node:
  express
  @types/express

# 构建

# SSR
目的：首屏加载，SEO
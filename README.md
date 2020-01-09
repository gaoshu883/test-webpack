# test-webpack

## todo
* <del>inject css and js into html</del>
* hot reload when modifying
* add babel and eslint

## note
* 为什么loader使用的位置叫模块？
  * 因为在webpack中，不同类型的文件都是一个模块
* css-loader 仅是处理css模块，没有作任何输出
  * 若需要输出成文件，可使用插件输出成file
* 使用插件将 css 和 js 注入 自定义的 html 模板中，当然也可以直接生成 html
* webpack hot module 只能支持 JS 部分的修改，如果需要支持样式文件( css / less / sass ... )的 hot reload ，就不能使用 extract-text-webpack-plugin 将样式文件剥离出去，否则无法监听修改、实时刷新。从这里出发考虑分别对开发环境和生产环境使用不同的 webpack 配置文件。

module.exports = {
  arrowParens: 'avoid', // 箭头函数只有一个参数的时候可以忽略括号
  bracketSpacing: true, // 括号内部不要出现空格
  endOfLine: 'lf', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  insertPragma: false, // 插入 @format 标记
  singleAttributePerLine: false, // 多个属性是否写在同一行
  bracketSameLine: false, // 大括号是否与控制语句在同一行
  jsxBracketSameLine: false, // jsx > 是否在同一行
  jsxSingleQuote: false, // jsx 使用单引号
  printWidth: 120, // 每行代码长度（默认80）
  proseWrap: 'preserve', // 是否要换行
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  requirePragma: false, // 是否要注释来决定是否格式化代码
  semi: false, // 语句末尾是否要加分号
  singleQuote: true, // 使用单引号（默认false）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  trailingComma: 'es5', // 末尾逗号（默认none）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  embeddedLanguageFormatting: 'auto', // 是否格式化嵌入的内容
  vueIndentScriptAndStyle: false, // 是否缩进Vue文件中的代码
  overrides: [
    {
      files: '*.html',
      options: { parser: 'html' },
    },
  ],
}

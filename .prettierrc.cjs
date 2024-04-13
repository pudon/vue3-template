module.exports = {
  printWidth: 120, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  semi: false, // 语句末尾是否要加分号
  singleQuote: true, // 是否使用单引号
  quoteProps: 'consistent', // 对象中的属性名是否使用引号
  jsxSingleQuote: false, // jsx中是否使用单引号
  trailingComma: 'all', // 数组、对象最后一个元素后面是否加逗号（none | es5 | all）
  bracketSpacing: true, // 对象大括号直接是否有空格（默认true）
  bracketSameLine: false, // 大括号是否与控制语句在同一行（默认false）
  arrowParens: 'always', // 箭头函数参数是否使用括号（avoid | always）
  endOfLine: 'lf', // 结尾是 \n \r \n\r auto
  singleAttributePerLine: false, // 多个属性是否写在同一行
  overrides: [
    {
      files: '*.html',
      options: { parser: 'html' },
    },
  ],
}

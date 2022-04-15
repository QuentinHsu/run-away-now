module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾是否需要有分号。false 表示换行时，不要有分号，true 表示换行时，要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在 JSX 中使用单引号
  jsxSingleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 换行符使用 lf
  endOfLine: 'lf',
  // 强制在括号内使用一致的空格
  bracketSpacing: true,
  // 箭头函数，尽可能不用括号
  arrowParens: 'avoid',
  // 尾随逗号，'none': 不要有尾随逗号，'es5': 在 ES5 模式下要有尾随逗号，'all': 在所有情况下都要有尾随逗号
  trailingComma: 'none',
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // html 所有元素的标签都另起一行
  htmlWhitespaceSensitivity: 'ignore'
}

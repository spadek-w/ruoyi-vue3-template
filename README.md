# 自述

> pnpm i eslint prettier husky lint-staged -D

## .npmrc

```JSON
shamefully-hoist = true
auto-install-peers = true

```

## .editorconfig

```txt
# 告诉EditorConfig插件，这是根文件，不用继续往上查找
root = true

# 匹配全部文件
[*]
# 设置字符集
charset = utf-8
# 缩进风格，可选space、tab
indent_style = space
# 缩进的空格数
indent_size = 2
# 结尾换行符，可选lf、cr、crlf
end_of_line = lf
# 在文件结尾插入新行
insert_final_newline = true
# 删除一行中的前后空格
trim_trailing_whitespace = true

# 匹配md结尾的文件
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false


```

## .prettierrc.js

```JavaScript
module.exports = {
  // // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 末尾需要有逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // //对HTML全局空白不敏感   （标签闭合换行）
  htmlWhitespaceSensitivity: 'ignore'
}

```

## .prettierignore

```txt
/node_modules/**
/dist/
/dist*
/public/*
/docs/*
/vite.config.ts
/src/types/env.d.ts
/docs/**/*
CHANGELOG

```

## commitizen cz-customizable

```JavaScript
{ value: 'feat', name: 'feat: 新功能' },
{ value: 'fix', name: 'fix: 修复' },
{ value: 'docs', name: 'docs: 文档变更' },
{ value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
{
value: 'refactor',
name: 'refactor: 重构(既不是增加 feature，也不是修复 bug)',
},
{ value: 'perf', name: 'perf: 性能优化' },
{ value: 'test', name: 'test: 增加测试' },
{ value: 'chore', name: 'chore: 构建过程或辅助工具的变动' },
{ value: 'revert', name: 'revert: 回退' },
{ value: 'build', name: 'build: 打包' },
```

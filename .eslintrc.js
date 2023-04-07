/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // html 不让写注释
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: ['login', 'Home', 'User', 'Resource', 'Trading', 'Pagination'] // 在这个数组中加入需要忽略的组件名
      }
    ],
    // 变量报错， 函数参数忽略
    'no-unused-vars': [2, { vars: 'all', args: 'none' }]
  }
}

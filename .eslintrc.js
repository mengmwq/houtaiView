/*
 * @Author: your name
 * @Date: 2020-11-24 14:55:17
 * @LastEditTime: 2020-11-25 12:06:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

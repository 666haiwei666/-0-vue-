// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'keyword-spacing': 'warn',
    'space-before-function-paren': 'warn',
    eqeqeq: 'off',
    'comma-spacing': 'warn',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'no-debugger': 'off',
    'no-multi-str': 'warn',
    'no-new': 'off',
    'padded-blocks': 'off',
    'template-curly-spacing': 'off',
    yoda: 'off',
    semi: 'off',
    'space-before-function-paren': 0
  }
}

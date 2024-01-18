module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 6,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/comment-directive': 'off',
  },
}

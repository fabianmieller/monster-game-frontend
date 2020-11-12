module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'only-multiline',
        exports: 'always',
        functions: 'always-multiline',
      },
    ],
    semi: ['error', 'never'],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': 'off',
    'indent-legacy': ['error', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

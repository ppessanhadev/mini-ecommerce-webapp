module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'off',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'arrow-body-style': ['off'],
    'no-restricted-syntax': ['off'],
    'no-empty-function': ['off'],
    'semi': ['error', 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'camelcase': ['off'],
    'newline-per-chained-call': ['off'],
    'vue/multi-word-component-names': ['off'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'object-curly-spacing': ['error', 'always']
  },
};

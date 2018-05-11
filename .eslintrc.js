module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'webpack.*.js',
        '*-setup.js',
        'stories/*.js'
      ],
      optionalDependencies: false,
    }],
    'max-len': ['error', { 'code': 120 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off'
  },
}

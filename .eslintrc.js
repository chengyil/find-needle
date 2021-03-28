module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:jest/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'plugins': ['jest'],
  'rules': {
    'require-jsdoc': ['off'],
  },
};

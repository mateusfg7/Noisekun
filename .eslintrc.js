module.exports = {
  extends: ['next', 'plugin:jest/recommended', 'prettier'],
  plugins: ['prettier', 'testing-library', 'jest-dom'],
  rules: {
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': 'error'
  }
}

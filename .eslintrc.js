module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['react', 'react-native', 'prettier', 'standard', 'react-hooks', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 120,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': ['error'],
  },
}

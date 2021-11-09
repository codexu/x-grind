module.exports = {
  root: true,
  plugins: ['prettier', '@typescript-eslint', 'import'],
  overrides: [
    {
      files: '*.js',
      extends: ['eslint-config-airbnb/base', 'prettier']
    },
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.json'
        ]
      },
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ]
    }
  ]
};
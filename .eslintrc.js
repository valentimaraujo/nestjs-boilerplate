module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'max-len': 'off',
    'no-promise-executor-return': 'off',
    'arrow-body-style': 'off',
    'no-useless-escape': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/indent': 'off',
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true },
      "ExportDeclaration": { "multiline": true, "minProperties": 4 }
    }],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ]
  },
};

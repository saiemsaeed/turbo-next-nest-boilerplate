module.exports = {
  ...require('config/eslint-nest'),
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: '2022'
  }
};

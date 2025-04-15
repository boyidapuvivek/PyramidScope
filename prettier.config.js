module.exports = {
  printWidth: 60,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      options: {
        printWidth: 60,
      },
    },
  ],
};

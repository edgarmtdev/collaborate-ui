module.exports = {
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	overrides: [
    {
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
      }
    }
  ],
	endOfLine: 'lf'
}
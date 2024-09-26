module.exports = {
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
    {
			files: ['*.json', '*.md', '*.toml', '*.yml'
      ],
			options: {
				useTabs: false
      }
    }
  ],
	endOfLine: 'lf'
}
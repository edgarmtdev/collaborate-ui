const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  plugins: ['prettier', 'import'],
  extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier",
		"standard"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project,
		sourceType: "module"
  },
  settings: {
    'import-resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: ['.eslintrc.cjs'],
  "rules": {
		"space-before-function-paren": "off",
		"no-unused-vars": "warn",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"caughtErrorsIgnorePattern": "^_"
			}
		],
		"no-multiple-empty-lines": "off",
		"no-tabs": "off",
		"indent": [
			"warn",
			"tab"
		],
		"quotes": [
			"warn",
			"single"
		],
		"jsx-quotes": [
			"warn",
			"prefer-single"
		],
		"eol-last": "off"
	}
}

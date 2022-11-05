# Personal website backend service

> this is backend service, the website is [here](https://github.com/Jin-Yanhong/Blog-Bms)

## Technology stack

-   Express.js
-   MongoDB
-   Mongoose
-   Redis
-   jwt
-   multer
-   multer-gridfs-storage

## Recommend VScode editor settings

```json
{
	"eslint.enable": true,
	"eslint.alwaysShowStatus": true,
	"eslint.quiet": true,
	"eslint.lintTask.enable": true,
	"eslint.run": "onSave",
	"eslint.validate": ["javascript", "javascriptreact", "html", "vue", "typescript", "typescriptreact"],
	"eslint.format.enable": true,
	"prettier.arrowParens": "avoid",
	"prettier.bracketSpacing": true,
	"prettier.embeddedLanguageFormatting": "auto",
	"prettier.htmlWhitespaceSensitivity": "strict",
	"prettier.insertPragma": false,
	"prettier.jsxSingleQuote": true,
	"prettier.printWidth": 360,
	"prettier.proseWrap": "always",
	"prettier.quoteProps": "as-needed",
	"prettier.semi": true,
	"prettier.singleQuote": true,
	"prettier.tabWidth": 4,
	"prettier.trailingComma": "es5",
	"prettier.useTabs": true
}
```

## How to start

you should startup your `mongoDB` server and `redis` server, next run the flowing command

```
npm i
```

and then, run the command below

```
npm start
```

# TypeScript project template

<p>
  <a href="https://github.com/heineiuo/ts-template/actions"><img style="max-width:100%" alt="GitHub Actions status" src="https://github.com/heineiuo/ts-template/workflows/Node%20CI/badge.svg"></a>
  <a href="https://coveralls.io/github/heineiuo/ts-template"><img style="max-width:100%" alt="Coverage status" src="https://coveralls.io/repos/github/heineiuo/ts-template/badge.svg"></a>
  <a href="https://www.npmjs.com/package/ts-template"><img style="max-width:100%" alt="npm version" src="https://img.shields.io/npm/v/ts-template.svg?style=flat"></a>
</p>

## Command

* yarn build
* yarn prepublish
* yarn test

## vscode settings

```json
{
  "editor.formatOnSave": true,
  "javascript.validate.enable": false,
  "eslint.alwaysShowStatus": true,
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    "JS",
    "typescript",
    "typescriptreact",
    "javascript",
    "javascriptreact"
  ],
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

## vscode extensions

* [Prettier - Code formatter (esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint (dbaeumer.vscode-eslint)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 

[howcasperwhat.github.io](https://howcasperwhat.github.io)

[MIT License](./LICENSE)

> [!TIP]
> **Change Node Modules**  
> 1. @vscode/markdown-it-katex/dist/index.js: `module.exports = default_1;`
> 2. vite-plugin-monaco-editor/dist/index.js: `module.exports = monacoEditorPlugin;`

> [!IMPORTANT]
> **TODO**  
> Fix Vite-SSG's bug: generate wrong path for monaco-editor.

> [!NOTE]
> **Deploy**  
> ``` sh
> npm run build
> npm run deploy
> ```
import Shiki from '@shikijs/markdown-it'
import KaTeX from '@vscode/markdown-it-katex'
import MarkdownIt from 'markdown-it'
import CopyCode from 'markdown-it-copy-code'
import Alert from 'markdown-it-github-alerts'
import Tabbar from 'markdown-it-tabbar'

const md = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  // eslint-disable-next-line antfu/no-top-level-await
}).use(KaTeX).use(await Shiki({
  defaultColor: false,
  defaultLanguage: 'ts',
  fallbackLanguage: 'ts',
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
})).use(CopyCode).use(Tabbar).use(Alert)

function renderMarkdown(content: string): string {
  return md.render(content)
}

function renderMarkdownInline(content: string): string {
  return md.renderInline(content)
}

function renderFormula(content: string, inline: boolean = true): string {
  if (inline)
    return renderMarkdownInline(`$${content}$`)
  else return renderMarkdown(`$$${content}$$`)
}

function matrixToLatex(matrix: number[][] | string[][]): string {
  let content = '\\begin{bmatrix}'
  for (const row of matrix) {
    for (const element of row) {
      if (typeof element === 'number')
        content += ` ${element.toFixed(2)} &`
      else
        content += ` ${element} &`
    }
    content = `${content.slice(0, -1)}\\\\`
  }
  content = `${content.slice(0, -2)}\\end{bmatrix}`
  return content
}

export function useMarkdown() {
  return { renderFormula, matrixToLatex, renderMarkdownInline, renderMarkdown, md }
}

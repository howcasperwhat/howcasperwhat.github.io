import mathjax3 from 'markdown-it-mathjax3'
// @ts-ignore
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
md.use(mathjax3)
function renderMarkdown(content: string): string {
  return md.render(content)
}
function renderMarkdownInline(content: string): string {
  return md.renderInline(content)
}
function renderFormula(content: string, inline: boolean = true): string {
  if (inline) return renderMarkdownInline(`$${content}$`)
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
    content = content.slice(0, -1) + '\\\\'
  }
  content = content.slice(0, -2) + '\\end{bmatrix}'
  return content
}

export const useMarkdown = () => {
  return { renderFormula, matrixToLatex, renderMarkdownInline, renderMarkdown }
}

export interface Project {
  icon: string
  title: string
  desc: string
  link: string
}

export const projects: Project[] = [
  {
    icon: 'comment-formula',
    title: 'Comment Formula',
    desc: 'A VSCode extensions to preview LaTeX formulas within the line of your editor.',
    link: 'https://github.com/howcasperwhat/comment-formula'
  },
  {
    icon: 'mathjax-intellisense',
    title: 'MathJax IntelliSense',
    desc: 'MathJax IntelliSense extension suite for VSCode.',
    link: 'https://github.com/howcasperwhat/mathjax-intellisense'
  },
  {
    icon: 'animate-notation',
    title: 'Animate Notation',
    desc: 'Create notations and control animations of it.',
    link: 'https://github.com/howcasperwhat/animate-notation'
  },
  {
    icon: 'markdown-it-copy-code',
    title: 'Markdown It Copy Code',
    desc: 'A markdown-it plugin to add code-copying function for code fence.',
    link: 'https://github.com/howcasperwhat/markdown-it-copy-code'
  },
  {
    icon: 'markdown-it-tabbar',
    title: 'Markdown It Tabbar',
    desc: 'A markdown-it plugin to group anything using tabbar.',
    link: 'https://github.com/howcasperwhat/markdown-it-tabbar'
  }
]
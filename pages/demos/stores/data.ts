import type { DemoProps } from '../types/demo'

export const demos: DemoProps[] = [
  {
    id: 0,
    name: 'MineSweeper',
    route: 'MineSweeper',
    description: 'A simple minesweeper game inspired by <a href="https://www.bilibili.com/video/BV1ia411b7jY/" target="_blank">antfu\'s tutorial</a>.',
  },
  {
    id: 1,
    name: 'BackPropagation',
    route: 'BackPropagation',
    description: 'A small toy using back propagation to reduce error.',
  },
  {
    id: 2,
    name: 'Spark-Chat',
    route: 'Spark-Chat',
    description: 'AI chatbot using <a href="https://www.xfyun.cn/" target="_blank">讯飞星火</a>.',
  },
  {
    id: 3,
    name: 'Markdown',
    route: 'Markdown',
    description: 'A markdown editor rendered in your browser.',
  },
]

export interface Note {
  date: string
  link: string
  title: string
}

export const notes: Note[] = [
  {
    date: '2023-08-25',
    link: '/notes/develop/MoreAnimatableNotation',
    title: 'More Animatable Notation',
  },
  {
    date: '2025-01-02',
    link: '/notes/research/AccelerateDatasetReading',
    title: '加速大数据集的读取',
  }
]
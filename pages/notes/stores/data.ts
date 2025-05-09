import type { NoteLink, NoteType } from '../types/note'

export const noteTypes: NoteType[] = [
  { id: 0, link: '/notes/develop/', title: 'Develop', icon: 'carbon:development', color: 'purple' },
  { id: 1, link: '/notes/research/', title: 'Research', icon: 'carbon:chemistry', color: 'orange' },
  { id: 2, link: '/notes/algorithm/', title: 'Algorithm', icon: 'carbon:code', color: 'green' },
]
export const noteLists: NoteLink[][] = [
  [
    { id: 0, name: 'FlexInCSS', title: 'CSS: display: flex', date: '2023-05-15', lang: 'zh', dev: ['css3'] },
    { id: 1, name: 'NumberInJs', title: 'Number In Javascript', date: '2023-07-18', lang: 'en', dev: ['javascript'] },
    { id: 2, name: 'Network', title: 'Computer Network', date: '2023-08-25', lang: 'ch', dev: [] },
    { id: 3, name: 'MoreAnimatableNotation', title: 'More Animatable Notation', date: '2023-08-25', lang: 'en', dev: ['typescript', 'vuejs'] }
  ],
  [
    { id: 0, name: 'BackPropagation', title: 'Back Propagation', date: '2023-07-19', lang: 'en', dev: ['typescript'] },
    { id: 1, name: 'SpeedingUpLargeDatasetLoading', title: 'Speeding Up Large Dataset Loading', date: '2025-01-02', lang: 'zh', dev: ['python'] },
  ],
  [
    { id: 0, name: 'LargestRectangleArea', title: 'Largest Rectangle Area', date: '2023-07-26', lang: 'en', dev: ['java'] },
    { id: 1, name: 'MaximalRectangle', title: 'Maximal Rectangle', date: '2023-07-26', lang: 'en', dev: ['java'] },
    { id: 2, name: 'DistinctSubsequences', title: 'Distinct Subsequences', date: '2023-07-28', lang: 'en', dev: ['java'] },
    { id: 3, name: 'BasicAlgorithm', title: 'Basic Algorithm', date: '2023-8-14', lang: 'en', dev: ['java'] },
    { id: 4, name: 'CountSubMatrix', title: 'Count Sub Matrix', date: '2023-8-14', lang: 'en', dev: ['java'] },
    { id: 5, name: 'BinarySearch', title: 'Binary Search', date: '2023-8-14', lang: 'ch', dev: ['java'] },
  ],
]

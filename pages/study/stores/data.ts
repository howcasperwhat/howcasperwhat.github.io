import type { StudyProcess, StudyType } from '../types/study'

export const studyTypes: StudyType[] = [
  { id: 0, title: 'Linear Algebra', link: '/study/linear-algebra/', status: 'pause' },
  { id: 1, title: 'Machine Learning', link: '/study/machine-learning/', status: 'pause' },
  { id: 2, title: 'Canvas Design', link: '/study/canvas-design/', status: 'pause' },
]

export const studyProcesses: StudyProcess[][] = [
  [
    { id: 0, name: 'linear-equation', date: '2023-08-06', title: 'Linear Equation', status: 'done' },
    { id: 1, name: 'matrix-elimination', date: '2023-08-07', title: 'Matrix Elimination', status: 'done' },
    { id: 2, name: 'multiplication-and-inversion', date: '2023-08-08', title: 'Multiplication and Inversion', status: 'done' },
    { id: 3, name: 'A=LU', date: '2023-08-09', title: 'A=LU', status: 'done' },
    { id: 4, name: 'vector-space', date: '2023-09-03', title: 'Vector Space', status: 'done' },
    { id: 5, name: 'homogeneous-equation', date: '2023-09-04', title: 'Homogeneous Equation', status: 'continue' },
  ],
  [
    { id: 0, name: 'data-preprocessing', date: '2023-08-10', title: 'Data PreProcessing', status: 'done' },
  ],
  [

  ],
]

export interface StudyType {
  id: number
  link: string
  title: string
  status: 'done' | 'continue' | 'pause'
}

export interface StudyProcess {
  id: number
  name: string
  date: string
  title: string
  status: 'done' | 'continue' | 'pause'
}

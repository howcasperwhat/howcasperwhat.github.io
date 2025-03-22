export interface NoteType {
  id: number
  icon: string
  title: string
  link: string
  color: string
}
export interface NoteLink {
  id: number
  name: string
  title: string
  date: string
  lang: string
  dev?: string[]
}

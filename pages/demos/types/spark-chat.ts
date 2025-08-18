export type ModelName = 'Lite' | 'V2.0' | 'Pro' | 'Max'
export type ModelDomain = 'general' | 'generalv2' | 'generalv3' | 'generalv3.5'
export type ModelVersion = 'v1.1' | 'v2.1' | 'v3.1' | 'v3.5'
export type Role = 'system' | 'user' | 'assistant'
export type Content = string
export interface Record { role: Role, content: Content }
export interface QA { question: Record, answer: Record }
export type Status = 0 | 1 | 2
export interface Request {
  header: {
    app_id: string
    uid?: string
  }
  parameter: {
    chat: {
      domain: ModelDomain
      temperature?: number
      max_tokens?: number
      top_k?: number
    }
  }
  payload: {
    message: {
      text: Record[]
    }
  }
}
export interface Response {
  header: {
    code: number
    message: string
    sid: string
    status: Status
  }
  payload: {
    choices: {
      status: Status
      seq: number
      text: Record[]
    }
  }
  usage: {
    text: {
      question_tokens: number
      prompt_tokens: number
      completion_tokens: number
      total_tokens: number
    }
  }
}

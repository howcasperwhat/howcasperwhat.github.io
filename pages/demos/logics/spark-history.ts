import type { Ref } from 'vue'
import type { Content, QA, Record, Role } from '../types/spark-chat'
import { ref } from 'vue'

export class History {
  public readonly qas: Ref<QA[]> = ref([])
  public constructor() { }
  public push(role: Role, content: Content): void {
    if (role === 'user') {
      this.qas.value.push({
        question: { role, content },
        answer: { role: 'assistant', content: 'thinking...' },
      })
    }
    else if (role === 'assistant') {
      this.qas.value[this.qas.value.length - 1].answer.content = content
    }
  }

  public concat(content: Content): void {
    this.qas.value[this.qas.value.length - 1].answer.content += content
  }

  public clip(thread: number): Record[] {
    const result: Record[] = []
    let tokens = 0
    for (let i = this.qas.value.length - 1; i >= 0; i--) {
      tokens += this.qas.value[i].answer.content.length
      if (tokens >= thread)
        break
      result.push(this.qas.value[i].answer)
      tokens += this.qas.value[i].question.content.length
      if (tokens >= thread)
        break
      result.push(this.qas.value[i].question)
    }
    // erase the last empty answer
    result.reverse().pop()
    return result
  }
}

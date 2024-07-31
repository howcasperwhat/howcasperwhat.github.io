import { assert } from "@vueuse/core"
import type {
  ModelDomain, ModelName, ModelVersion,
  Request, Response, QA
} from "../types/spark-chat"
import CryptoJS from "crypto-js"
import { checkInteger, checkRange } from "./assert"
import { History } from "./spark-history"

const { HmacSHA256, enc } = CryptoJS

export const _spark_map: {
  [key in ModelName]: {
    version: ModelVersion
    domain: ModelDomain
  }
} = {
  'Lite': { version: 'v1.1', domain: 'general' },
  'V2.0': { version: 'v2.1', domain: 'generalv2' },
  'Pro': { version: 'v3.1', domain: 'generalv3' },
  'Max': { version: 'v3.5', domain: 'generalv3.5' }
}

export class SparkChat {
  private readonly PROTOCOL = 'wss'
  private readonly HOST = 'spark-api.xf-yun.com'
  private readonly ROUTE = 'chat'
  private readonly appID: string
  private readonly apiKey: string
  private readonly apiSecret: string
  // private readonly name: ModelName
  private readonly version: ModelVersion
  private readonly domain: ModelDomain
  private readonly baseURL: string
  private readonly pathname: string
  public readonly history: History
  public constructor(modelName: ModelName,
    appID: string, apiKey: string,
    apiSecret: string
  ) {
    this.history = new History()
    // this.name = modelName
    this.version = _spark_map[modelName].version
    this.domain = _spark_map[modelName].domain
    this.appID = appID
    this.apiKey = apiKey
    this.apiSecret = apiSecret
    this.pathname = `/${this.version}/${this.ROUTE}`
    this.baseURL = `${this.PROTOCOL}://${this.HOST}${this.pathname}`
  }
  // public get records() {
  //   return this.history.records.value
  // }
  public get qas(): QA[] {
    return this.history.qas.value
  }
  private authenticate(): Promise<string> {
    return new Promise<string>((resolve) => {
      const host = 'spark-api.xf-yun.com'
      // const host = location.host
      const date = new Date().toUTCString()
      const signature = enc.Base64.stringify(
        HmacSHA256([
          `host: ${host}`,
          `date: ${date}`,
          `GET ${this.pathname} HTTP/1.1`
        ].join('\n'), this.apiSecret)
      )
      const authorization = btoa([
        `api_key="${this.apiKey}"`,
        `algorithm="hmac-sha256"`,
        `headers="host date request-line"`,
        `signature="${signature}"`
      ].join(', '))
      const url = [`${this.baseURL}`, [
        `authorization=${authorization}`,
        `date=${date}`,
        `host=${host}`
      ].join('&')].join('?')
      resolve(url)
    })
  }
  private constructRequst(
    history: History,
    temperature: number = 0.5,
    max_tokens: number = 4096,
    top_k: number = 4,
  ): Request {
    assert(checkRange(temperature, 0, 1) || temperature === 0, 'Temperature should be in range (0, 1]')
    assert(checkInteger(max_tokens), 'Max tokens should be an integer')
    assert(checkRange(max_tokens, 1, 8192), 'Max tokens should be in range [1, 8192]')
    assert(checkInteger(top_k), 'Top k should be an integer')
    assert(checkRange(top_k, 1, 6), 'Top k should be in range [1, 8192]')
    return {
      header: { app_id: this.appID },
      parameter: {
        chat: {
          domain: this.domain,
          temperature, max_tokens, top_k
        }
      },
      payload: { message: { text: history.clip(8192) } }
    }
  }

  public send(
    message: string,
    update: () => void,
    success: () => void,
    error: (event: Event) => void
  ) {
    this.history.push('user', message)
    update()
    this.authenticate().then((url) => {
      const socket = new WebSocket(url)
      socket.onopen = () => {
        const request = this.constructRequst(this.history)
        socket.send(JSON.stringify(request))
      }
      socket.onmessage = (event) => {
        const response: Response = JSON.parse(event.data)
        if (response.header.code !== 0) error(event)
        const content = response.payload.choices.text.map((record) => record.content).join('')
        if (response.header.status === 0) {
          this.history.push('assistant', content)
          update()
        } else {
          this.history.concat(content)
          update()
        }
        if (response.header.status === 2) {
          success()
        }
      }
      socket.onerror = (event) => {
        console.info(url)
        console.error(event)
      }
    })
  }
}
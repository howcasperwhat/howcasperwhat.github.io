import { ref } from 'vue'

type MessageType = 'success' | 'info' | 'warning' | 'error'

const messageBox = ref<HTMLElement>()
const animation = ref<Animation>()
const isHidden = ref(true)
const content = ref()
const type = ref<MessageType>()

function messageAux(_type: MessageType, _message: string, _duration: number = 3000) {
  type.value = _type
  content.value = _message
  isHidden.value = false
  animation.value?.cancel()
  animation.value = messageBox.value?.animate([
    { transform: 'translateX(-50%) translateY(-100%)', offset: 0 },
    { transform: 'translateX(-50%) translateY(20%)', offset: 0.05 },
    { transform: 'translateX(-50%) translateY(20%)', offset: 0.95 },
    { transform: 'translateX(-50%) translateY(-100%)', offset: 1 },
  ], {
    duration: _duration,
    easing: 'linear',
  })
  animation.value?.finished.then(() => {
    isHidden.value = true
  })
}

function success(msg: string, duration?: number) {
  messageAux('success', msg, duration)
}
function info(msg: string, duration?: number) {
  messageAux('info', msg, duration)
}
function warning(msg: string, duration?: number) {
  messageAux('warning', msg, duration)
}
function error(msg: string, duration?: number) {
  messageAux('error', msg, duration)
}

export function useMessage() {
  return { success, info, warning, error }
}

export function useMessageProperties() {
  return { messageBox, isHidden, content, type }
}

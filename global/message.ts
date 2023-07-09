import { ref } from "vue";

export const message = ref()

export const useMessage = () => {
  return message.value
}
import { computed, getCurrentInstance, WritableComputedRef } from 'vue'

export const useProp = <T extends unknown>(
  props: Record<string, unknown>,
  propName: string
): WritableComputedRef<T> => {
  const vm = getCurrentInstance()?.proxy

  return computed({
    get() {
      return props[propName] as T
    },
    set(value) {
      vm?.$emit(`update:${propName}`, value)
    }
  })
}

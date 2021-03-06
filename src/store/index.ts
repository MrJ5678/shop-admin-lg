import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

const state = {
  isCollapse: false
}

export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  },

  actions: {}
})

// 定义自己的 ‘useStore’ 组合式函数
export function useStore () {
  return baseUseStore(key)
}

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
  }),
  getters: {
    upperCaseName: state => state.name.toUpperCase(),
  },
  actions: {
    setName(name) {
      this.name = name
    },
  },
})

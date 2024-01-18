import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
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

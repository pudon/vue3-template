import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
  }),
  getters: {
    upperCaseName: (state) => state.name.toUpperCase(),
  },
  actions: {
    login(loginForm) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Logged in with:', loginForm.username)
          resolve()
        }, 1000)
      })
    },
  },
  persist: {
    paths: ['name'],
  },
})

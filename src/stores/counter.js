import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    isEven: (state)=> {
      if ( state.counter % 2 === 0) return "odd"
      return "even"
    }
  },
  actions: {
    increement(){
      this.counter++
    },
    decrease(){
      this.counter--
    }
  }
})

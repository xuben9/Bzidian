import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionary: [],
    keyWords: "",
    res: [],
  },
  mutations: {
    getDictionary(state, val) {
      state.dictionary = val
    },
    getKeyWords(state, val) {
      state.keyWords = val
    },
    showResults(state, val) {
      state.res = state.dictionary.filter(function (element) {
        return element.NOTE.indexOf(val) != -1
      })
    },
    getResults(state, val) {
      state.res = val
    }

  },
  actions: {
  },
  modules: {
  }
})

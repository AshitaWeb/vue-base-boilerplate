import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'local-storage'

Vue.use(Vuex)

const state = {
  isLogged: !!ls('token')
}

const mutations = {
  LOGIN_USER(state) {
    state.isLogged = true
  },

  LOGOUT_USER(state) {
    state.isLogged = false
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations
})
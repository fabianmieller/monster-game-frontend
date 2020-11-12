// Logs Store

const state = {
  logs: [],
}

const getters = {}

const actions = {}

const mutations = {
  ADD_LOG(state, log) {
    state.logs.unshift(log)
  },
  CLEAR_LOGS(state) {
    state.logs = []
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

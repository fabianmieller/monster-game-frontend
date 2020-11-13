// Game Store

const state = {
  human: {
    health: 100,
  },
  computer: {
    health: 100,
  },
  activeGame: false,
  isFighting: false,
  winner: false,
}

const getters = {}

const actions = {
  startGame({ commit }) {
    commit('logs/CLEAR_LOGS', null, { root: true })
    commit('START_GAME')
  },
  giveUp({ commit }) {
    commit('GIVE_UP')
  },
  performAbility({ dispatch }, { player, ability, type = null }) {
    let amount
    // TODO: add random ability to computer
    if(ability === 'attack' || player === 'computer') {
      amount = dispatch('attack', { player: player === 'human' ? 'computer' : 'human', type })
    } else if(ability === 'heal') {
      amount = dispatch('heal', { player })
    }

    return amount
  },
  startFight({ commit }) {
    commit('SET_IS_FIGHTING', true)
  },
  endFight({ commit }) {
    commit('SET_IS_FIGHTING', false)
  },
  attack({ commit }, { player, type }) {
    let amount = 0
    if(type === 'normal') {
      amount = calculateValue(3,6)
    } else if(type === 'special') {
      amount = calculateValue(5, 10)
    }
    commit('ATTACK_PLAYER', { player, amount })
    return amount
  },
  heal({ commit }, { player }) {
    const amount = calculateValue(3, 10)
    commit('HEAL_PLAYER', { player, amount })
    return amount
  },
}

const calculateValue = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

const mutations = {
  SET_IS_FIGHTING(state, value) {
    state.isFighting = value
  },
  SET_WINNER(state, value) {
    state.winner = value
    state.isGameActive = false
  },
  GIVE_UP(state) {
    state.isGameActive = false
  },
  START_GAME(state) {
    state.human.health = 100
    state.computer.health = 100
    state.isGameActive = true
    state.isFighting = false
    state.winner = false
  },
  ATTACK_PLAYER(state, { player, amount }) {
    const newHealth = state[player].health - amount
    state[player].health = newHealth <= 0 ? 0 : newHealth
  },
  HEAL_PLAYER(state, { player, amount }) {
    const newHealth = state[player].health + amount
    state[player].health = newHealth > 100 ? 100 : newHealth
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

import { createStore } from 'vuex'

// modules
import game from './modules/game'
import logs from './modules/logs'

const store = createStore({
  modules: {
    game,
    logs,
  },
})

export default store

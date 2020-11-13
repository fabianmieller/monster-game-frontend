<template>
  <section class="control-bar mt-8">
    <template v-if="!isGameActive">
      <div class="controls grid grid-cols-1 md:grid-cols-6 justify-center">
        <div class="inline-flex md:col-start-2 md:col-span-4 rounded-md shadow justify-center">
          <button
            id="start-game"
            class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            @click="startGame">
            START NEW GAME
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="controls flex grid grid-cols-1 md:grid-cols-4 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-12 justify-center">
        <div class="inline-flex rounded-md shadow">
          <button
            :disabled="isFighting"
            id="attack"
            class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            :class="{'cursor-not-allowed': isFighting}"
            @click="onPerformAbility('attack', 'normal')">
            ATTACK
          </button>
        </div>
        <div class="inline-flex rounded-md shadow">
          <button
            :disabled="isFighting"
            id="special-attack"
            class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            :class="{'cursor-not-allowed': isFighting}"
            @click="onPerformAbility('attack', 'special')">
            SPECIAL ATTACK
          </button>
        </div>
        <div class="inline-flex rounded-md shadow">
          <button
            :disabled="isFighting"
            id="heal"
            class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            :class="{'cursor-not-allowed': isFighting}"
            @click="onPerformAbility('heal')">
            HEAL
          </button>
        </div>
        <div class="inline-flex rounded-md shadow">
          <button
            id="give-up"
            class="inline-flex flex-grow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-300 hover:bg-blue-200 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            @click="giveUp">
            GIVE UP
          </button>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'ControlBar',
  computed: {
    ...mapState('game', [
      'human',
      'computer',
      'isGameActive',
      'isFighting',
    ]),
  },
  data: () => ({

  }),
  methods: {
    ...mapMutations('logs', [
      'ADD_LOG',
      'CLEAR_LOGS',
    ]),
    ...mapActions('game', [
      'performAbility',
      'startGame',
      'giveUp',
      'startFight',
      'endFight',
    ]),
    ...mapMutations('game', ['SET_WINNER']),
    async onPerformAbility(ability, type = null) {
      this.startFight()
      // TODO: random player start
      const amount = await this.performAbility({ player: 'human', ability, type })

      if(ability === 'attack') {
        this.addAttackToLog('human','computer', type, amount)
      } else if(ability === 'heal') {
        this.addHealToLog('human', amount)
      }

      if(this.checkWinner() === 'human') {
        this.SET_WINNER('human')
        this.ADD_LOG({
          winner: 'human',
        })
        return
      }

      const self = this
      setTimeout(() => {
        self.attackHuman(ability, type || 'normal')
      }, 1000)
    },
    async attackHuman(ability, type) {
      // TODO: add random ability to computer
      const amount = await this.performAbility({ player: 'computer', ability: ability !== 'heal' && ability, type })

      this.addAttackToLog('computer', 'human', type, amount)

      if(this.checkWinner() === 'computer') {
        this.SET_WINNER('computer')
        this.ADD_LOG({
          winner: 'computer',
        })
      }
      this.endFight()
    },
    checkWinner() {
      if(this.computer.health <= 0) {
        return 'human'
      } else if(this.human.health <= 0) {
        return 'computer'
      }
      return false
    },
    addAttackToLog(sender, receiver, type, amount) {
      this.ADD_LOG({
        ability: 'attack',
        sender,
        receiver,
        type,
        amount,
      })
    },
    addHealToLog(sender, amount) {
      this.ADD_LOG({
        ability: 'heal',
        sender,
        amount,
      })
    },
  },
}
</script>

<style>

</style>

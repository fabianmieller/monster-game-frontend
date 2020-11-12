<template>
  <section class="control-bar">
    <template v-if="!isGameActive">
      <div class="controls">
        <button id="start-game" @click="startGame">START NEW GAME</button>
      </div>
    </template>
    <template v-else>
      <div class="controls">
        {{ isFighting }}
        <button :disabled="isFighting" id="attack" @click="performAbility('attack', 'normal')">ATTACK</button>
        <button :disabled="isFighting" id="special-attack" @click="performAbility('attack', 'special')">
          SPECIAL ATTACK
        </button>
        <button :disabled="isFighting" id="heal" @click="performAbility('heal')">HEAL</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </template>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ControlBar',
  data: () => ({
    isFighting: false,
    isGameActive: false,
    human: {
      health: 100,
    },
    computer: {
      health: 100,
    },
  }),
  methods: {
    ...mapMutations('logs', ['ADD_LOG', 'CLEAR_LOGS']),
    startGame() {
      // TODO: use human and computer from store
      this.human.health = 100
      this.computer.health = 100
      this.isGameActive = true
      this.isFighting = false
      this.CLEAR_LOGS()
    },
    giveUp() {
      this.isGameActive = false
    },
    performAbility(ability, type = null) {
      this.isFighting = true
      let amount
      if(ability === 'attack') {
        amount = this.attack(this.computer, type)
        this.addAttackToLog('human','computer', type, amount)
      } else if(ability === 'heal') {
        amount = this.heal(this.human)
        this.addHealToLog('human', amount)
      }

      if(this.checkWinner() === 'human') {
        this.isFighting = false
        this.setWinner('human')
        this.isGameActive = false
        return
      }

      const self = this
      setTimeout(() => {
        self.attackHuman(type)
      }, 1000)
    },
    attackHuman(type) {
      // TODO: add random ability to computer
      this.isFighting = true
      let amount = this.attack(this.human, type)

      this.addAttackToLog('computer', 'human', type, amount)

      this.isFighting = false

      if(this.checkWinner() === 'computer') {
        this.setWinner('computer')
        this.isGameActive = false
        return
      }
    },
    attack(player, type){
      let amount

      if(type === 'normal') {
        player.health -= amount = this.calculateDamage(3,6)
      } else if(type === 'special') {
        player.health -= amount = this.calculateDamage(5, 10)
      }

      player.health = player.health <= 0 ? 0 : player.health

      return amount
    },
    heal(player) {
      let amount
      player.health += amount = this.calculateDamage(3, 10)
      player.health = player.health > 100 ? 100 : player.health
      return amount
    },
    checkWinner() {
      if(this.computer.health <= 0) {
        return 'human'
      } else if(this.human.health <= 0) {
        return 'computer'
      }
      return false
    },
    setWinner(winner) {
      // console.log(winner)
      return winner
    },
    calculateDamage(min, max) {
      return Math.floor(Math.random() * max) + min
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

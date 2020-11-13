<template>
  <section class="game-page container mx-auto">
    <div class="flex">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h2 class="mb-2 text-2xl font-bold">You</h2>
        <health-bar :health="human.health"></health-bar>
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h2 class="mb-2 text-2xl font-bold">Computer</h2>
        <health-bar :health="computer.health"></health-bar>
      </div>
    </div>
    <control-bar></control-bar>
    <log-box></log-box>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import ControlBar from '../components/modules/ControlBar.vue'
import HealthBar from '../components/modules/HealthBar.vue'
import LogBox from '../components/modules/LogBox.vue'

export default {
  components: { HealthBar, ControlBar, LogBox },
  name: 'GamePage',
  computed: {
    ...mapState('game', [
      'human',
      'computer',
    ]),
  },
}
</script>

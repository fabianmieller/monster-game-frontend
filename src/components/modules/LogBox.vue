<template>
  <section v-if="logs.length > 0" class="log-box">
    <ul>
      <li v-for="(log, i) in logs" :key="i" :class="log.sender === 'human' ? 'player-turn' : 'monster-turn'">
        <template v-if="log.ability === 'attack'">
          {{ log.sender }} {{ log.type }} attack {{ log.receiver }} for {{ log.amount }}
        </template>
        <template v-if="log.ability === 'heal'">
          {{ log.sender }} heals for {{ log.amount }}
        </template>
        <template v-if="log.winner">
          {{ log.winner }} is the winner
        </template>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LogBox',
  computed: {
    ...mapState('logs', ['logs']),
  },
}
</script>

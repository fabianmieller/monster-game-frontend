<template>
  <app-navigation></app-navigation>
  <app-page-title :title="$route.meta.title"></app-page-title>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import AppNavigation from './components/layouts/AppNavigation'
import AppPageTitle from './components/layouts/AppPageTitle'

export default {
  components: {
    AppNavigation,
    AppPageTitle,
  },
  name: 'App',
  data: () => {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import './assets/scss/index.scss';
</style>

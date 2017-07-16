<template lang="pug">
div
  app-hero
  introduction
  portfolio
  app-footer

</template>

<script>
import AppFooter from '../organisms/App-Footer'
import AppHero from '../organisms/App-Hero'
import Introduction from '../organisms/Introduction'
import Portfolio from '../organisms/Portfolio'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppHero,
    Introduction,
    Portfolio
  }
}
</script>

<style>

</style>

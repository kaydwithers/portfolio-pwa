<template lang="pug">
#app
  router-view
</template>

<script>
  import AppHero from './components/organisms/App-Hero'
  import Introduction from './components/organisms/Introduction'
  import Portfolio from './components/organisms/Portfolio'
  import AppFooter from './components/organisms/App-Footer'

  export default {
    name: 'app',
    components: {
      AppHero,
      Introduction,
      Portfolio,
      AppFooter
    }
  }
</script>

<style>
@import "./assets/css/main.css";
</style>

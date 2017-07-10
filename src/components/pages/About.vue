<template lang="pug">
.about
  .page
    .layout
      .layout__item.w-100
        app-navigation
        app-title(title='About' lgOne)
</template>

<script>
import AppNavigation from '@/components/molecules/App-Navigation'
import AppTitle from '@/components/atoms/App-Title'

export default {
  name: 'hero',
  components: {
    AppNavigation,
    AppTitle
  }
}
</script>

<style>

</style>

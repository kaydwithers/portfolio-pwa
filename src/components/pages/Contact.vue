<template lang="pug">
.contact
  .page
    .layout
      .layout__item.w-100
        app-navigation
        app-title(title='Contact' lg-two)

    .layout.layout--center
      .layout__item.w-50
        p.mb-2 This site is still under construction. There will be a form here soon. 
        p In the meantime you can send an email to 
          a(href='mailto:kaydwithers@gmail.com') kaydwithers@gmail.com.
        // app-form

</template>

<script>
import AppForm from '@/components/organisms/App-Form'
import AppNavigation from '@/components/molecules/App-Navigation'
import AppTitle from '@/components/atoms/App-Title'

export default {
  name: 'hero',
  components: {
    AppForm,
    AppNavigation,
    AppTitle
  }
}
</script>

<style>

</style>

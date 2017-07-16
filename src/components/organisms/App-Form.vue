<template lang="pug">
form.form(name='contact' action='thank-you' netlify)
  app-form-item(text='Hello' name='firstName' placeholder='Enter Name' labelText='Name')
  app-form-item(text='Hello' name='firstName' placeholder='Enter Email' labelText='Email')
  app-button( 
    :linkHref='portfolioItemHref' 
    linkText='Submit'
    :linkIcon='portfolioItemIcon' 
  )
</template>

<script>
import AppButton from '@/components/atoms/App-Button'
import AppFormItem from '@/components/molecules/App-Form-Item'

export default {
  name: 'form-item',
  components: {
    AppButton,
    AppFormItem
  }
}
</script>

<style>

</style>

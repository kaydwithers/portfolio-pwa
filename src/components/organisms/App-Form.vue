<template lang="pug">
form.form(name='contact' action='thank-you' data-netlify='true' netlify-honeypot='bot-field')
  app-form-item(name='name' placeholder='Enter Name' labelText='Name')
  app-form-item(name='email' placeholder='Enter Email' labelText='Email')
  app-form-item(isTextarea name='message' placeholder='Enter message' labelText='Message')
  label.d-n Don’t fill this out: 
    input(name='bot-field')

  app-button( 
    isSubmit
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

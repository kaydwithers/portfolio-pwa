<template lang="pug">
.form__item
  app-label(:labelText='labelText')
  app-input(:placeholder='placeholder')

</template>

<script>
import AppLabel from '@/components/atoms/App-Label'
import AppInput from '@/components/atoms/App-Input'

export default {
  name: 'form-item',
  components: {
    AppLabel,
    AppInput
  },
  props: {
    placeholder: { type: String, default: '[PH] Placeholder' },
    labelText: { type: String, default: '[PH] labelText' }
  }
}
</script>

<style>

</style>

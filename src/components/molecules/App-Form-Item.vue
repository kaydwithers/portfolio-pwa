<template lang="pug">
.form__item.mb-2
  app-label(:labelText='labelText' :for='labelText')

  div(v-if='isTextarea')
    app-textarea(:placeholder='placeholder' :name='labelText')
  
  div(v-else)
    app-input(:placeholder='placeholder' :name='labelText')

</template>

<script>
import AppLabel from '@/components/atoms/App-Label'
import AppInput from '@/components/atoms/App-Input'
import AppTextarea from '@/components/atoms/App-Textarea'

export default {
  name: 'form-item',

  components: {
    AppLabel,
    AppInput,
    AppTextarea
  },

  props: {
    isTextarea: { default: false },
    placeholder: { default: '[PH] Placeholder' },
    labelText: { default: '[PH] labelText' }
  }
}
</script>

<style>

</style>

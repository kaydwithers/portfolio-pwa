<template lang="pug">
label.h5.d-b.mb-1(
  for='name'
  id="'#' + 'name'" 
  type='text' 
  name='labelName' 
  :placeholder='labelPlaceholder'
) {{ labelText }}
  span(v-if='required') *
</template>

<script>
export default {
  name: 'app-label',
  props: {
    labelName: { type: String, default: '[PH] Name' },
    labelPlaceholder: { type: String, default: '[PH] Placeholder' },
    labelText: { type: String, default: '[PH] labelText' }
  }
}
</script>

<style>

</style>

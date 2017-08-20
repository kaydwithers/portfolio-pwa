<template lang="pug">
label.h6.d-b(
  :for='labelName' 
) {{ labelText }}
  span(v-if='required') *
</template>

<script>
export default {
  name: 'app-label',
  props: {
    labelName: { default: '[PH] Name' },
    labelText: { default: '[PH] labelText' }
  }
}
</script>

<style>

</style>

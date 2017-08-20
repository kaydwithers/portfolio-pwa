<template lang="pug">
textarea.db.w-100.p-1(
  type='text' 
  :name='name' 
  :placeholder='placeholder' 
  required
)
</template>

<script>
export default {
  name: 'app-textarea',
  props: {
    name: { default: 'message' },
    placeholder: { default: 'Your message' }
  }
}
</script>

<style>

</style>

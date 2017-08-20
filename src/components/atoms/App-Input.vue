<template lang="pug">
input.db.w-100.p-1(
  type='text' 
  :name='name' 
  :placeholder='placeholder' 
  required
)
</template>

<script>
export default {
  name: 'app-input',
  props: {
    name: { type: String, default: 'lastname' },
    placeholder: { type: String, default: '[PH] Placeholder' }
  }
}
</script>

<style>
input, textarea {

}

::placeholder {
  color: var(--gray);
  font-size: .875rem;
}
</style>

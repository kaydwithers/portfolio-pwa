<template lang="pug">
input.db.w-100.p-1(
  id='"#" + "name"' 
  type='text' 
  :name='name' 
  :placeholder='placeholder' 
  v-model='name' 
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
input {

}

::placeholder {
  color: var(--gray);
  font-size: 1rem;
}
</style>

<template lang="pug">
.app-title
  div(
    :class="[\
      { 'b-lg-1': lgOne }, \
      { 'b-lg-2': lgTwo } \
    ]"
  )
    .ta-c.bc-white.mbm-screen
      h1.lh-1-5.fw-6.mt-3.mb-4 {{ title }}
  
  .ta-c
    p.mb-5 Not ready yet

</template>

<script>
export default {
  name: 'app-title',
  props: {
    title: { default: '[PH] Title' },
    lgOne: { default: true },
    lgTwo: { default: false }
  }
}
</script>

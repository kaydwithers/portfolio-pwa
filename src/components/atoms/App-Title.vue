<template lang="pug">
.app-title
  div
    .ta-c
      h1.lh-1-5.fw-6.mt-3.mb-4 
        span(
          :class="[\
            { 'b-lg-1': lgOne }, \
            { 'b-lg-2': lgTwo } \
          ]"
        )
          span.bc-white.mbm-screen {{ title }}

</template>

<script>
export default {
  name: 'app-title',
  props: {
    title: { default: '[PH] Title' },
    lgOne: { default: false },
    lgTwo: { default: false }
  }
}
</script>

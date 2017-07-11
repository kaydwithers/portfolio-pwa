<template lang="pug">
.app-footer.bc-black.pv-4
  .page

    .layout
      .layout__item

        .d-f-l.white.ta-c

          p.mb-1
            a.hover-gray(
              rel='noopener noreferrer'
              target='_blank' 
              href='https://github.com/kaydwithers'
            ) GitHub

          p.pl-4-l.mb-1
            a.hover-gray(
              href='mailto:kaydwithers@gmail.com'
            ) Email

          p.pl-4-l.mb-1
            a.hover-gray(
              rel='noopener noreferrer'
              target='_blank' 
              href='https://twitter.com/kaydw'
            ) Twitter

          p.pl-4-l.mb-1
            a.hover-gray(
              rel='noopener noreferrer'
              target="_blank" 
              href='https://www.linkedin.com/in/kayd-withers'
            ) LinkedIn

          p.pl-4-l
            a.hover-gray(
              rel='noopener noreferrer'
              target="_blank" 
              href='https://www.meetup.com/members/187458390/'
            ) Meetup

</template>



<script>

  import Pikachu from '@/components/atoms/Pikachu'
  import Secret from '@/components/Secret'

  export default {
    name: 'app-footer',
    components: {
      Secret,
      Pikachu
    }
  }

</script>



<style>

</style>

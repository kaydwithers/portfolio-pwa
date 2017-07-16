<template lang="pug">
.about
  .page
    .layout
      .layout__item.w-100
        app-navigation
        app-title(title='About' lg-one)

    .layout.layout--center
      .layout__item.w-50
        .ta-c
          p.mb-2 Hi, I'm Kayd Withers, a Front End Developer currently working at Isobar Melbourne. Check out some of my work below or check out my 
            a(href='') GitHub. 
          p If you'd like to say hi, get in touch by sending me an  
            a(href='mailto:kaydwithers@gmail.com') email 
            | or you can find me on 
            a(href='twitter.com/kaydw') Twitter. 
            | If you'd like to see my resume, you can visit it 
            a(href='') here.

</template>

<script>
import AppNavigation from '@/components/molecules/App-Navigation'
import AppTitle from '@/components/atoms/App-Title'

export default {
  name: 'hero',
  components: {
    AppNavigation,
    AppTitle
  }
}
</script>

<style>
.about .bar,
.contact .bar {
  background-color: var(--black);
}

.about .is-active .bar,
.contact .is-active .bar {
  background-color: var(--white);
}
</style>

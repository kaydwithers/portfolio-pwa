<template lang="pug">
.about
  .page
    .layout
      .layout__item.w-100
        app-navigation
        app-title(title='About' lg-one)

    .layout.layout--center
      .layout__item.w-50
        p.mb-2 I am Kayd Withers, a Front End Developer currently working at Isobar Melbourne. Some of the clients I have worked with include Australia Post, GM/Holden and Australian Catholic University.
        p.mb-2 If you'd like to say hi, get in touch by sending me an 
          a(href='mailto:kaydwithers@gmail.com') email 
          | or you can find me on 
          a(href='twitter.com/kaydw') Twitter. 
          | My Github can be found  
          a(href='https://github.com/kaydwithers') here. 
          | I also love going to 
          a(href='https://www.meetup.com/members/187458390/') Meetups.
          // | If you'd like to see my resume, you can visit it 
          // a(href='') here.

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

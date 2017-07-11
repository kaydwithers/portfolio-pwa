<template lang="pug">
.portfolio-extras
  .page.mv-4.pt-3
    .layout.d-f

      .layout__item.w-100.w-50-l
        p.h6.h5-m.h5-l.tt-u.ls-1.mb-2.fw-6 Miscellaneous projects

      .layout__item.w-100.w-50-l
        p.h6.h6-m.h6-l.gray Other projects that I have worked on.

  .page
    .layout.layout--flush.d-f.fw-w.mb-4

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1499671872/portfolio_ghkweb.jpg')
          .portfolio__item__content
            .pt-3.pb-4
              p.black.tt-u.ls-1.fw-6.mb-1 Portfolio
              p.gray The site you are on right now was built with Vue PWA.

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          a(target='_blank' rel='noopener noreferrer' href='https://youngcodersau.com')
            img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1499671871/young-coders_ss1vqi.jpg')
            .portfolio__item__content
              .pt-3.pb-4
                p.black.tt-u.ls-1.fw-6.mb-1 Young Coders ʕ•ᴥ•ʔ
                p.gray Young Coders was built Nuxt.js and uses an API driven Contentful CMS. The site is deployed with Netlify.

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          a(target='_blank' rel='noopener noreferrer' href='https://kaydwithers.github.io/vue-adventure/')
            img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/vue-adventure.jpg')
            .portfolio__item__content
              .pt-3.pb-4
                p.black.tt-u.ls-1.fw-6.mb-1 Vue Adventure
                p.gray A text based adventure game built with Vue.
                p.h6.gray (Work in progress)

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          a(target='_blank' rel='noopener noreferrer' href='https://kaydwithers.github.io/5e-character-sheet/')
            img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/5e-character-sheet.jpg')
            .portfolio__item__content
              .pt-3.pb-4
                p.black.tt-u.ls-1.fw-6.mb-1 Character Sheet
                p.gray HTML Flexbox 5E Character Sheet
                p.h6.gray (Work in progress)

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          a(target='_blank' rel='noopener noreferrer' href='https://pugbike.com/pepper')
            img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/pepper.jpg')
            .portfolio__item__content
              .pt-3.pb-4
                p.black.tt-u.ls-1.fw-6.mb-1 Pepper
                p.gray One of the greatest dogs of all time.

      .layout__item.w-100.w-33-m.w-25-l
        .portfolio__item.hover-shrink.ph-1-m.ph-2-l
          a(target='_blank' rel='noopener noreferrer' href='https://kaydwithers.github.io/css-grid-framework/')
            img.d-b.one-whole(src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/css-grid-framework.jpg')
            .portfolio__item__content
              .pt-3.pb-4
                p.black.tt-u.ls-1.fw-6.mb-1 CSS Grid framework
                p.gray An attempt at making CSS Grid reusable.
                p.h6.gray (Work in progress)

      // I currently work at Isobar Melbourne. Check out some of my work below or check out my <a class="link" href="">GitHub.</a> <br />If you'd like to say hi, get in touch with <a class="link" href="mailto:kaydwithers@gmail.com">email</a> or <a class="link" href="twitter.com/kaydw">Twitter. -->

</template>

<script>
  import AppButton from '@/components/atoms/App-Button'

  export default {
    name: 'portfolio-extras',
    components: {
      AppButton
    }
  }
</script>

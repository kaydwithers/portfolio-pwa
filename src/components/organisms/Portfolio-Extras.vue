<template lang="pug">
.portfolio-extras
  .page.mv-4.pt-3
    .layout.d-f

      .layout__item.w-100.w-50-l
        p.h6.h5-m.h5-l.tt-u.ls-1.mb-2.fw-6 Miscellaneous projects

      .layout__item.w-100.w-50-l
        p.h6.h6-m.h6-l.gray Other projects that I have worked on.

  .page
    .layout.layout--flush.d-f.fw-w.mb-2.mb-4-m.mb-4-l

      portfolio-extras-item(
        alt='Portfolio website layout', 
        heading='Portfolio', 
        href='https://github.com/kaydwithers/portfolio-pwa', 
        paragraphOne='The site you are on right now was built with Vue PWA.', 
        paragraphTwo='',
        src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1499671872/portfolio_ghkweb.jpg', 
      )

      portfolio-extras-item(
        alt='Young Coders website layout', 
        heading='Young Coders ʕ•ᴥ•ʔ', 
        href='https://youngcodersau.com', 
        paragraphOne='Young Coders was built Nuxt.js and uses an API driven Contentful CMS. The site is deployed with Netlify.', 
        paragraphTwo='',
        src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1499671871/young-coders_ss1vqi.jpg', 
      )

      portfolio-extras-item(
        alt='Vue Adventure website layout', 
        heading='Vue Adventure', 
        href='https://kaydwithers.github.io/vue-adventure/', 
        paragraphOne='A text based adventure game built with Vue.', 
        paragraphTwo='(Work in progress)',
        src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/vue-adventure.jpg', 
      )

      portfolio-extras-item(
        alt='Vue Adventure website layout', 
        heading='🐶 Pepper', 
        href='http://pugbike.com/pepper', 
        paragraphOne='One of the greatest dogs of all time.', 
        paragraphTwo='',
        src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/pepper.jpg', 
      )

      portfolio-extras-item(
        alt='Vue Adventure website layout', 
        heading='Character Sheet', 
        href='https://kaydwithers.github.io/5e-character-sheet/', 
        paragraphOne='HTML Flexbox 5E Character Sheet', 
        paragraphTwo='(Work in progress)',
        src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/5e-character-sheet.jpg', 
      )

      // .layout__item.w-100.w-33-m.w-20-l
      //   .portfolio__item.hover-shrink.ph-1-m.ph-2-l
      //     a(target='_blank' rel='noopener noreferrer' href='https://kaydwithers.github.io/css-grid-framework/')
      //       img.d-b.one-whole(
      //         src='https://res.cloudinary.com/dvjpaoffl/image/upload/w_550,c_fill,f_auto,q_auto:best/v1491710129/portfolio/css-grid-framework.jpg' 
      //         alt=''
      //       )
      //       .portfolio__item__content
      //         .pt-3.pb-4
      //           p.black.tt-u.ls-1.fw-6.mb-1 CSS Grid framework
      //           p.gray An attempt at making CSS Grid reusable.
      //           p.h6.gray (Work in progress)

</template>

<script>
import AppButton from '@/components/atoms/App-Button'
import PortfolioExtrasItem from '@/components/molecules/Portfolio-Extras-Item'

export default {
  name: 'portfolio-extras',
  components: {
    AppButton,
    PortfolioExtrasItem
  }
}
</script>

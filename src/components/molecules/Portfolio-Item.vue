<template lang="pug">
  .portfolio-item
    .page
      .layout.layout--flush.d-f.fw-w.mb-4(
        :class="{ 'layout--reverse': portfolioItemMediaLeft }"
      )

        .layout__item.w-100.w-50-m.w-50-l.d-f.ai-c
          div(
            :class="[\
              { 'pl-4-l': portfolioItemMediaLeft }, \
              { 'pr-4-l': !portfolioItemMediaLeft }\
            ]"
          )
            p.h6.h5-m.h5-l.tt-u.ls-1.fw-6.mb-2 {{ portfolioItemHeading }}
            p.h6.h5-m.h5-l.gray.mb-2 {{ portfolioItemContent }}

            .mb-2
              App-Button( 
                :linkHref='portfolioItemHref' 
                linkText='Visit site'
                :linkIcon='portfolioItemIcon' 
              )

        .layout__item.w-100.w-50-m.w-50-l
          .portfolio-item__media.hover-shrink
            a(
              target='_blank' 
              :href='portfolioItemHref'
            )
              // <img class="d-b  w-100" src="http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg">

              video.d-b.w-100( 
                :poster="portfolioItemPoster" 
                preload 
                loop 
                autoplay 
                muted
              )
                source(type='video/mp4' :src='portfolioItemVideo')

              .portfolio-item__media__content
                .as-c
                  p.white {{ portfolioItemIcon }}

</template>



<script>
  import AppButton from '@/components/atoms/App-Button'

  export default {
    name: 'portfolio',
    components: {
      AppButton
    },
    props: {
      portfolioItemMediaLeft: { default: true },
      portfolioItemHeading: { default: 'PH Heading' },
      portfolioItemContent: { default: 'PH Content' },
      portfolioItemVideo: { default: 'https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-svp-overview-hero.mp4' },
      portfolioItemPoster: { default: 'http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg' },
      portfolioItemIcon: { default: '↛' },
      portfolioItemHref: { default: '' }
    }
  }
</script>



<style>
.portfolio-item__media {
  position: relative;
}

.portfolio-item__media__content {
  background: rgba(0, 0, 0, .5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity var(--transition);
  width: 100%;
}

  .portfolio-item__media__content:hover {
    opacity: 1;
  }

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.fadeIn {
  animation-name: fadeIn;
}
</style>

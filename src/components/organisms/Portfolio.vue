<template lang="pug">
.portfolio
  Portfolio-Item(
    :portfolioItemMediaLeft='true', 
    portfolioItemHeading='Commodore Limited Edition', 
    portfolioItemContent='Each carline is built up with a selection of components. We use Fabricator as an integrated pattern library. Each time a new component is created, Fabricator automatically adds it to the pattern library. The client can then go into the pattern libarary and choose what sort of components they would like to use for the next project.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-svp-overview-hero.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg', 
    portfolioItemIcon='↛', 
    portfolioItemHref='https://holden.com.au/cars/commodore/limited-edition'
  )

  Portfolio-Item(
    :portfolioItemMediaLeft='false', 
    portfolioItemHeading='Commodore Carline', 
    portfolioItemContent='The carline project would define a set of responsive components which would form the building blocks for all Holden carline pages moving forward. This gave a consistent feel to each carline.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-overview-hero.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715420/Portfolio/commodore-redline.jpg', 
    portfolioItemIcon='➳', 
    portfolioItemHref='https://www.holden.com.au/cars/commodore'
  )

  Portfolio-Item(
    :portfolioItemMediaLeft='true', 
    portfolioItemHeading='Colorado Carline', 
    portfolioItemContent='Each carline is built up with a selection of components. We use Fabricator as an integrated pattern library. Each time a new component is created, Fabricator automatically adds it to the pattern library. The client can then go into the pattern libarary and choose what sort of components they would like to use for the next project.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/colorado/2017/2017_02_colorado_overview_performance.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715420/Portfolio/colorado-ltz.jpg', 
    portfolioItemIcon='⇝', 
    portfolioItemHref='https://www.holden.com.au/cars/colorado'
  )

  Portfolio-Item(
    :portfolioItemMediaLeft='false', 
    portfolioItemHeading='Colorado Accessories', 
    portfolioItemContent='For this project we really wanted to show off the product with a looping video as the centre piece of the design. Over six videos were shot for each site section to showcase each Accessory type. We took the best 6-10 second cut of each to autoplay at the top of each page.', 
    portfolioItemVideo='https://holden.com.au/resources/videos/Holden0616Towing_Loop_V01.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/colorado-accessories2.jpg', 
    portfolioItemIcon='⇝', 
    portfolioItemHref='https://www.holden.com.au/accessories/colorado'
  )

  Portfolio-Extras
</template>

<script>
import PortfolioExtras from '@/components/organisms/Portfolio-Extras'
import PortfolioItem from '@/components/molecules/Portfolio-Item'

export default {
  name: 'portfolio',
  components: {
    PortfolioExtras,
    PortfolioItem
  }
}
</script>

<style>

</style>

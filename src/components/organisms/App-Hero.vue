<template>
  <div class="hero  p-r  z-1">

    <div class="hero__particles  p-r  z-3">
      <particles />
    </div>

    <div class="hero__overlay  p-r  z-1">
    </div>

    <div class="hero__video">
      <iframe 
        class="z-1"
        id="ytplayer" 
        src="https://www.youtube.com/embed/c5rWB_fS5ao?controls=0&enablejsapi=1&modestbranding=0&cc_load_policy=1&showinfo=0&rel=0&loop=1&iv_load_policy=3&playlist=c5rWB_fS5ao" 
        frameborder="0"
      >
      </iframe>
    </div>

    <div class="hero__header  p-r  z-4">
      <div class="page">
        <div class="layout">
          <div class="layout__item">
            <app-navigation />
          </div>
        </div>
      </div>
    </div>

    <div class="hero__content  p-r  z-3  tt-u  ls-8  pv-5  lh-1-5">
      <h1 class="h2  h1-l  fw-6">
        {{ heading }}
      </h1>

      <h2 class="h3  h2-l  tt-u">
        {{ headingSub }}
      </h2>
    </div>

    <div class="hero__footer  p-r  z-3  pv-2">
      <div class="page">
        <div class="layout">
          <div class="layout__item">
            <p class="scrollto  white  h4  h5-l  ta-r">
              <a 
                class="pt-3  pl-3  ts-1"
                href="#" 
                v-scroll-to="{
                  el: '#portfolio',
                  duration: 500,
                  easing: 'ease',
                }"
              >
                <svg id="scrollto__arrow" class="scrollto__arrow  pr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.8 84.4"><title>Arrow down</title><g><polygon fill="#fff" points="1.4,42 9.7,33.7 36.4,60.4 36.4,1 48.3,1 48.3,60.4 75.1,33.6 83.4,42 42.4,83"/><path fill="#fff" d="M47.3,2v60.8L75.1,35l6.9,7L42.4,81.6L2.8,42l6.9-6.9l27.7,27.7V2H47.3 M49.3,0h-2h-9.9h-2v2v56L11.1,33.7 l-1.4-1.4l-1.4,1.4l-6.9,6.9L0,42l1.4,1.4L41,83l1.4,1.4l1.4-1.4l39.6-39.6l1.4-1.4l-1.4-1.4l-6.9-7l-1.4-1.4l-1.4,1.4L49.3,58V2V0 L49.3,0z"/></g></svg>
                  Scroll <span class="gray  hover-white">to view portfolio</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- videos
      c5rWB_fS5ao - Aurora
      NM2wtte1JRE - ISS
      8OiWoUNZ8kM - ISS
    -->

  </div>
</template>

<script>
import AppNavigation from '@/components/molecules/App-Navigation'
import Particles from '@/components/atoms/Particles'

export default {
  name: 'hero',
  components: {
    AppNavigation,
    Particles
  },

  data () {
    return {
      heading: 'Kayd Withers',
      headingSub: 'Front End Developer'
    }
  }
}
</script>

<style>
.hero__header {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

.hero__footer {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
}



/* is-active */
#ytplayer {
  opacity: 0;
}

#ytplayer.is-active {
  opacity: 1;
}



/* Hero */
.hero {
  background-color: #000;
  height: 100vh;
  overflow: hidden;
  user-select: none;
}

.hero__overlay {
  background: rgba(0, 0, 0, .1);
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute; 
  top: 0; 
  width: 100%;
}

.hero__video {
  pointer-events: none;
}

  .hero__video iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: opacity .5s;
    width: 100%;
  }

    @media (min-aspect-ratio: 16/9) {

      .hero__video iframe {
        height: 300%;
        top: -100%;
      }

    }

    @media (max-aspect-ratio: 16/9) {

      .hero__video iframe {
        left: -100%;
        width: 300%;
      }

    }

.hero__content {
  cursor: default;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
  text-align: center;
}

.hero__content h1 {
  display: block;
  opacity: 1;
  transition: all var(--transition);
  user-select: none;
}

  .hero__content:hover h1 {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }

.hero__content h2 {
  left: 50%;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all var(--transition);
  width: 100%;
}

  .hero__content:hover h2 {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1, 1);
  }



/* Scrollto */
.scrollto {

}

  .scrollto a span {
    transition: color var(--transition)
  }

.scrollto__arrow {
  width: .7rem;
}

</style>

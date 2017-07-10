<template lang="pug">
.navigation
  hamburger

  transition(name='fade')
    div(v-show='$store.state.toggle.menuActive')
      .navigation__overlay

        .navigation__overlay-content.lh-2
          router-link.h2.h1-l.fw-6.ph-3.db.d-ib-m.gray.hover-white(
            @click.native='$store.state.toggle.menuActive = !$store.state.toggle.menuActive'
            to='/about'
          ) About

          router-link.h2.h1-l.fw-6.ph-3.db.d-ib-m.gray.hover-white(
            @click.native='$store.state.toggle.menuActive = !$store.state.toggle.menuActive'
            to='/contact'
          ) Contact

</template>

<script>
import Hamburger from '@/components/atoms/Hamburger'

export default {
  name: 'navigation',
  components: {
    Hamburger
  }
}
</script>

<style>
.navigation {
  color: #fff;
}

.navigation__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.navigation__overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>

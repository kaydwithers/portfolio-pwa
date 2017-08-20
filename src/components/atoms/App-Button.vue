<template lang="pug">
button.link.d-ib.h6.black.p-r(
  v-if='isSubmit' 
  type='submit' 
)
  | {{ linkText }} 
  span(
    aria-hidden='true'
  ) {{ linkIcon }}

a.link.d-ib.h6.black.p-r(
  v-else
  rel='noopener noreferrer' 
  role='button' 
  :target='target' 
  :href='linkHref' 
)
  | {{ linkText }} 
  span(
    aria-hidden='true'
  ) {{ linkIcon }}
</template>

<script>
export default {
  name: 'buttontext',
  props: {
    linkHref: { default: 'https://holden.com.au/cars/commodore' },
    linkText: { default: 'Visit site' },
    linkIcon: { default: '↛' },
    isSubmit: { default: false },
    target: { default: '_blank' }
  }
}
</script>

<style>
button {
  
}

.link {
  bottom: -6px;
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
  font-style: normal;
}

.link:after,
.link:before {
  background: #171719;
  bottom: -1px;
  content: '';
  display: block;
  height: 1px;
  left: 0;
  margin-bottom: 4px;
  position: absolute;
  width: 100%;
}

.link:before {
  opacity: .35;
  transition: 
    background .8s cubic-bezier(.19, 1, .22, 1), 
    transform .5s cubic-bezier(1, 0, 0, 1) .1s;
}

.link:after {
  transform: translate3d(-102%, 0, 0);
  transition: 
    background .8s cubic-bezier(.19, 1, .22, 1), 
    transform .8s cubic-bezier(.19, 1, .22, 1);
}

.link:hover:before {
  transform: translate3d(102%, 0, 0);
  transition: 
    background .6s cubic-bezier(.19, 1, .22, 1), 
    transform .6s cubic-bezier(.19, 1, .22, 1) .1s;
}

.link:hover:after {
  transform: translate3d(0, 0, 0);
  transition: 
    background .6s cubic-bezier(.19, 1, .22, 1), 
    transform .6s cubic-bezier(.19, 1, .22, 1) .05s;
}
</style>

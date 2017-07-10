<template lang="pug">
#app
  router-view
</template>

<script>
  import AppHero from './components/organisms/App-Hero'
  import Introduction from './components/organisms/Introduction'
  import Portfolio from './components/organisms/Portfolio'
  import AppFooter from './components/organisms/App-Footer'

  export default {
    name: 'app',
    components: {
      AppHero,
      Introduction,
      Portfolio,
      AppFooter
    }
  }
</script>

<style>
/* Variables */
:root {
  --global-font-size:    18px;
  --global-line-height:  1.8;
  --spacing-extra-small: calc(var(--spacing-small) / 2);
  --spacing-small:       calc(var(--global-font-size) * 1.5);
  --spacing-medium:      calc(var(--spacing-small) * 2);
  --spacing-large:       calc(var(--spacing-small) * 4);
  --spacing-extra-large: calc(var(--spacing-small) * 6);
  --transition:          .4s;
  --white:               #fff;
  --black:               #000;
  --gray:                #a3a1a1;
}

/*
@custom-media --breakpoint-not-small screen and (min-width: 48em);
@custom-media --breakpoint-medium screen and (min-width: 48em) and (max-width: 64em);
@custom-media --breakpoint-large screen and (min-width: 64em);

@media (--breakpoint-not-small) {}
@media (--breakpoint-medium) {}
@media (--breakpoint-large) {}
*/

@font-face {
  font-family: 'maison';
  src: 
    url('~./assets/fonts/MaisonNeue-Book.eot?#iefix') format('embedded-opentype'),  
    url("~./assets/fonts/MaisonNeue-Book.woff") format("woff"), 
    url("~./assets/fonts/MaisonNeue-Book.ttf") format("truetype"), 
    url("~./assets/fonts/MaisonNeue-Book.svg") format("svg");
  font-weight: 400;
  font-style: normal; 
}

@font-face {
  font-family: 'maison';
  src: 
    url('~./assets/fonts/MaisonNeue-Medium.eot?#iefix') format('embedded-opentype'),  
    url("~./assets/fonts/MaisonNeue-Medium.woff") format("woff"), 
    url("~./assets/fonts/MaisonNeue-Medium.ttf") format("truetype"), 
    url("~./assets/fonts/MaisonNeue-Medium.svg") format("svg");
  font-weight: 500;
  font-style: normal; 
}

@font-face {
  font-family: 'maison';
  src: 
    url('~./assets/fonts/MaisonNeue-Bold.eot?#iefix') format('embedded-opentype'),  
    url("~./assets/fonts/MaisonNeue-Bold.woff") format("woff"), 
    url("~./assets/fonts/MaisonNeue-Bold.ttf") format("truetype"), 
    url("~./assets/fonts/MaisonNeue-Bold.svg") format("svg");
  font-weight: 600;
  font-style: normal; 
}



/* Base */
html {
  box-sizing: border-box;
  color: #000;
  font-family: 'maison', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: calc(var(--global-line-height) * var(--global-font-size));
  min-height: 100%;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
}

*:before,
*:after {
  box-sizing: inherit;
}

body,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, dd, ol, ul,
figure,
hr,
fieldset, legend {
  margin:  0;
  padding: 0;
}

img {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}

img[width],
img[height] {
  max-width: none;
}



/* Scaffold */
.page { 
  margin-right: auto;
  margin-left: auto;
  padding-left: var(--spacing-small);
  padding-right: var(--spacing-small);
  max-width: var(--desktop-up);
}

  @media screen and (min-width: 64em) {
    .page { 
      padding-left: var(--spacing-large);
      padding-right: var(--spacing-large);
    }
  }

.layout {
  font-size: 0;
  list-style: none;
  margin: 0;
  margin-left: calc(-1 * var(--spacing-small));
  padding: 0;
}

  @media screen and (min-width: 64em) {
    .layout { 
      margin-left: calc(-1 * var(--spacing-large));
    }
  }

.layout__item {
  box-sizing: border-box;
  display: inline-block;
  padding-left: var(--spacing-small);
  vertical-align: top;
  width: 100%;
}

  @media screen and (min-width: 64em) {
    .layout__item { 
      padding-left: var(--spacing-large);
    }
  }

  .layout--flush {
    margin-left: 0;
  }

  .layout--flush > .layout__item {
    padding-left: 0;
  }

  .layout--reverse {
    flex-direction: row-reverse;
  }



/* Widths */
.w1           { width: 1rem; }
.w2           { width: 2rem; }
.w3           { width: 4rem; }
.w4           { width: 8rem; }
.w5           { width: 16rem; }
.w-10         { width:  10%; }
.w-20         { width:  20%; }
.w-25         { width:  25%; }
.w-30         { width:  30%; }
.w-33         { width:  33%; }
.w-34         { width:  34%; }
.w-40         { width:  40%; }
.w-50         { width:  50%; }
.w-60         { width:  60%; }
.w-70         { width:  70%; }
.w-75         { width:  75%; }
.w-80         { width:  80%; }
.w-90         { width:  90%; }
.w-100        { width: 100%; }
.w-third      { width: calc(100% / 3); }
.w-two-thirds { width: calc(100% / 1.5); }
.w-auto       { width: auto; }

@media screen and (min-width: 48em) and (max-width: 64em) {
  .w1-m           { width: 1rem; }
  .w2-m           { width: 2rem; }
  .w3-m           { width: 4rem; }
  .w4-m           { width: 8rem; }
  .w5-m           { width: 16rem; }
  .w-10-m         { width:  10%; }
  .w-20-m         { width:  20%; }
  .w-25-m         { width:  25%; }
  .w-30-m         { width:  30%; }
  .w-33-m         { width:  33%; }
  .w-34-m         { width:  34%; }
  .w-40-m         { width:  40%; }
  .w-50-m         { width:  50%; }
  .w-60-m         { width:  60%; }
  .w-70-m         { width:  70%; }
  .w-75-m         { width:  75%; }
  .w-80-m         { width:  80%; }
  .w-90-m         { width:  90%; }
  .w-100-m        { width: 100%; }
  .w-third-m      { width: calc(100% / 3); }
  .w-two-thirds-m { width: calc(100% / 1.5); }
  .w-auto-m       { width: auto; }
}

@media screen and (min-width: 64em) {
  .w1-l           { width: 1rem; }
  .w2-l           { width: 2rem; }
  .w3-l           { width: 4rem; }
  .w4-l           { width: 8rem; }
  .w5-l           { width: 16rem; }
  .w-10-l         { width:  10%; }
  .w-20-l         { width:  20%; }
  .w-25-l         { width:  25%; }
  .w-30-l         { width:  30%; }
  .w-33-l         { width:  33%; }
  .w-34-l         { width:  34%; }
  .w-40-l         { width:  40%; }
  .w-50-l         { width:  50%; }
  .w-60-l         { width:  60%; }
  .w-70-l         { width:  70%; }
  .w-75-l         { width:  75%; }
  .w-80-l         { width:  80%; }
  .w-90-l         { width:  90%; }
  .w-100-l        { width: 100%; }
  .w-third-l      { width: calc(100% / 3); }
  .w-two-thirds-l { width: calc(100% / 1.5); }
  .w-auto-l       { width: auto; }
}



/* Typography */
h1, h2, h3, h4, h5, h6    { font-weight: normal; }
h1, h2, h3, h4, h5, h6, p { margin: 0; padding: 0; }

h1, .h1 { font-size: 3rem; }
h2, .h2 { font-size: 2.25rem; }
h3, .h3 { font-size: 1.5rem; }
h4, .h4 { font-size: 1.25rem; }
h5, .h5 { font-size: 1rem; }
h6, .h6 { font-size: .875rem; }
.h7     { font-size: .75rem; }

.f-5    { font-size: 5rem; }
.f-6    { font-size: 6rem; }

@media screen and (min-width: 48em) and (max-width: 64em) {
  h1, .h1-m { font-size: 3rem; }
  h2, .h2-m { font-size: 2.25rem; }
  h3, .h3-m { font-size: 1.5rem; }
  h4, .h4-m { font-size: 1.25rem; }
  h5, .h5-m { font-size: 1rem; }
  h6, .h6-m { font-size: .875rem; }
  .h7-m     { font-size: .75rem; }
}

@media screen and (min-width: 64em) {
  h1, .h1-l { font-size: 3rem; }
  h2, .h2-l { font-size: 2.25rem; }
  h3, .h3-l { font-size: 1.5rem; }
  h4, .h4-l { font-size: 1.25rem; }
  h5, .h5-l { font-size: 1rem; }
  h6, .h6-l { font-size: .875rem; }
  .h7-l     { font-size: .75rem; }
}

p, a  { font-size: .875rem; }

  @media screen and (min-width: 48em) and (max-width: 64em) {
    p, a  { font-size: .875rem; }
  }

  @media screen and (min-width: 64em) {
    p, a  { font-size: 1rem; }
  }

a { 
  color: inherit; 
  cursor: pointer; 
  text-decoration: none; 
}

.lh-1   { line-height: 1; }
.lh-1-5 { line-height: 1.5; }
.lh-2   { line-height: 2; }


/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



/* Helpers */

.ai-c { align-items: center; }
.as-c { align-self: center; }

.b-lg-1 { background: linear-gradient(45deg,#FBCA88,#EF69AD); }
.b-lg-2 { background: linear-gradient(45deg,#97F7FB,#8D8AFC); }

.bc-black { background-color: var(--black); }
.bc-white { background-color: var(--white); }

.mbm-screen { mix-blend-mode: screen; }

.hover-white,
.hover-gray { 
  transition: color var(--transition); 
}

  .hover-white:hover { color: var(--white); }
  .hover-gray:hover  { color: var(--gray); }

.gray  { color: var(--gray); }
.white { color: var(--white); }

.d-b  { display: block; }
.d-i  { display: inline; }
.d-ib { display: inline-block; }
.d-f  { display: flex; }
.d-if { display: inline-flex; }

@media screen and (min-width: 48em) and (max-width: 64em) {
  .d-b-m  { display: block; }
  .d-i-m  { display: inline; }
  .d-ib-m { display: inline-block; }
  .d-f-m  { display: flex; }
  .d-if-m { display: inline-flex; }
}

@media screen and (min-width: 64em) {
  .d-b-l  { display: block; }
  .d-i-l  { display: inline; }
  .d-ib-l { display: inline-block; }
  .d-f-l  { display: flex; }
  .d-if-l { display: inline-flex; }
}

.fd-rr { flex-direction: row-reverse; }

.fw-4 { font-weight: 400; }
.fw-5 { font-weight: 500; }
.fw-6 { font-weight: 600; }

.fw-w { flex-wrap: wrap; }

.hover-shrink,
.hover-shrink video {
  transition: transform var(--transition);
}

.hover-shrink {
  overflow: hidden;
}

  .hover-shrink:hover {
    transform: scale(.97);
  }

  .hover-shrink video:hover {
    transform: scale(1.1);
  }

.jc-sb { justify-content: space-between; }

.ls-1 { letter-spacing: .1rem; }
.ls-8 { letter-spacing: .8rem; }

.p-a { position: absolute; }
.p-f { position: fixed; }
.p-r { position: relative; }

.ta-c { text-align: center; }
.ta-l { text-align: left; }
.ta-r { text-align: right; }
.tt-u { text-transform: uppercase; }

.ts-1 { text-shadow: 0 0.08em 0.5em rgba(0,0,0,.4), 0 0.08em 1.5em rgba(0,0,0,.2); }

.z-0  { z-index: 0; }
.z-1  { z-index: 1; }
.z-2  { z-index: 2; }
.z-3  { z-index: 3; }
.z-4  { z-index: 4; }



/* Spacing */
.m-0 { margin: 0; }
.m-1 { margin: var(--spacing-extra-small); }
.m-2 { margin: var(--spacing-small); }
.m-3 { margin: var(--spacing-medium); }
.m-4 { margin: var(--spacing-large); }
.m-5 { margin: var(--spacing-extra-large); }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--spacing-extra-small); }
.mb-2 { margin-bottom: var(--spacing-small); }
.mb-3 { margin-bottom: var(--spacing-medium); }
.mb-4 { margin-bottom: var(--spacing-large); }
.mb-5 { margin-bottom: var(--spacing-extra-large); }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: var(--spacing-extra-small); }
.mt-2 { margin-top: var(--spacing-small); }
.mt-3 { margin-top: var(--spacing-medium); }
.mt-4 { margin-top: var(--spacing-large); }
.mt-5 { margin-top: var(--spacing-extra-large); }

.mh-0 { margin-left: 0; }
.mh-1 { margin-left: var(--spacing-extra-small); margin-right: var(--spacing-extra-small); }
.mh-2 { margin-left: var(--spacing-small); margin-right: var(--spacing-small); }
.mh-3 { margin-left: var(--spacing-medium); margin-right: var(--spacing-medium); }
.mh-4 { margin-left: var(--spacing-large); margin-right: var(--spacing-large); }
.mh-5 { margin-left: var(--spacing-extra-large); margin-right: var(--spacing-extra-large); }

.mv-0 { margin-top: 0; }
.mv-1 { margin-top: var(--spacing-extra-small); margin-bottom: var(--spacing-extra-small); }
.mv-2 { margin-top: var(--spacing-small); margin-bottom: var(--spacing-small); }
.mv-3 { margin-top: var(--spacing-medium); margin-bottom: var(--spacing-medium); }
.mv-4 { margin-top: var(--spacing-large); margin-bottom: var(--spacing-large); }
.mv-5 { margin-top: var(--spacing-extra-large); margin-bottom: var(--spacing-extra-large); }

.p-0 { padding: 0; }
.p-1 { padding: var(--spacing-extra-small); }
.p-2 { padding: var(--spacing-small); }
.p-3 { padding: var(--spacing-medium); }
.p-4 { padding: var(--spacing-large); }
.p-5 { padding: var(--spacing-extra-large); }

.pr-0 { padding-right: 0; }
.pr-1 { padding-right: var(--spacing-extra-small); }
.pr-2 { padding-right: var(--spacing-small); }
.pr-3 { padding-right: var(--spacing-medium); }
.pr-4 { padding-right: var(--spacing-large); }
.pr-5 { padding-right: var(--spacing-extra-large); }

.pl-0 { padding-left: 0; }
.pl-1 { padding-left: var(--spacing-extra-small); }
.pl-2 { padding-left: var(--spacing-small); }
.pl-3 { padding-left: var(--spacing-medium); }
.pl-4 { padding-left: var(--spacing-large); }
.pl-5 { padding-left: var(--spacing-extra-large); }

.pb-0 { padding-bottom: 0; }
.pb-1 { padding-bottom: var(--spacing-extra-small); }
.pb-2 { padding-bottom: var(--spacing-small); }
.pb-3 { padding-bottom: var(--spacing-medium); }
.pb-4 { padding-bottom: var(--spacing-large); }
.pb-5 { padding-bottom: var(--spacing-extra-large); }

.pt-0 { padding-top: 0; }
.pt-1 { padding-top: var(--spacing-extra-small); }
.pt-2 { padding-top: var(--spacing-small); }
.pt-3 { padding-top: var(--spacing-medium); }
.pt-4 { padding-top: var(--spacing-large); }
.pt-5 { padding-top: var(--spacing-extra-large); }

.ph-0 { padding-left: 0; }
.ph-1 { padding-left: var(--spacing-extra-small); padding-right: var(--spacing-extra-small); }
.ph-2 { padding-left: var(--spacing-small); padding-right: var(--spacing-small); }
.ph-3 { padding-left: var(--spacing-medium); padding-right: var(--spacing-medium); }
.ph-4 { padding-left: var(--spacing-large); padding-right: var(--spacing-large); }
.ph-5 { padding-left: var(--spacing-extra-large); padding-right: var(--spacing-extra-large); }

.pv-0 { padding-top: 0; }
.pv-1 { padding-top: var(--spacing-extra-small); padding-bottom: var(--spacing-extra-small); }
.pv-2 { padding-top: var(--spacing-small); padding-bottom: var(--spacing-small); }
.pv-3 { padding-top: var(--spacing-medium); padding-bottom: var(--spacing-medium); }
.pv-4 { padding-top: var(--spacing-large); padding-bottom: var(--spacing-large); }
.pv-5 { padding-top: var(--spacing-extra-large); padding-bottom: var(--spacing-extra-large); }

@media screen and (min-width: 48em) and (max-width: 64em) {
  .m-0-m { margin: 0; }
  .m-1-m { margin: var(--spacing-extra-small); }
  .m-2-m { margin: var(--spacing-small); }
  .m-3-m { margin: var(--spacing-medium); }
  .m-4-m { margin: var(--spacing-large); }
  .m-5-m { margin: var(--spacing-extra-large); }

  .mb-0-m { margin-bottom: 0; }
  .mb-1-m { margin-bottom: var(--spacing-extra-small); }
  .mb-2-m { margin-bottom: var(--spacing-small); }
  .mb-3-m { margin-bottom: var(--spacing-medium); }
  .mb-4-m { margin-bottom: var(--spacing-large); }
  .mb-5-m { margin-bottom: var(--spacing-extra-large); }

  .mt-0-m { margin-top: 0; }
  .mt-1-m { margin-top: var(--spacing-extra-small); }
  .mt-2-m { margin-top: var(--spacing-small); }
  .mt-3-m { margin-top: var(--spacing-medium); }
  .mt-4-m { margin-top: var(--spacing-large); }
  .mt-5-m { margin-top: var(--spacing-extra-large); }

  .mh-0-m { margin-left: 0; }
  .mh-1-m { margin-left: var(--spacing-extra-small); margin-right: var(--spacing-extra-small); }
  .mh-2-m { margin-left: var(--spacing-small); margin-right: var(--spacing-small); }
  .mh-3-m { margin-left: var(--spacing-medium); margin-right: var(--spacing-medium); }
  .mh-4-m { margin-left: var(--spacing-large); margin-right: var(--spacing-large); }
  .mh-5-m { margin-left: var(--spacing-extra-large); margin-right: var(--spacing-extra-large); }

  .mv-0-m { margin-top: 0; }
  .mv-1-m { margin-top: var(--spacing-extra-small); margin-bottom: var(--spacing-extra-small); }
  .mv-2-m { margin-top: var(--spacing-small); margin-bottom: var(--spacing-small); }
  .mv-3-m { margin-top: var(--spacing-medium); margin-bottom: var(--spacing-medium); }
  .mv-4-m { margin-top: var(--spacing-large); margin-bottom: var(--spacing-large); }
  .mv-5-m { margin-top: var(--spacing-extra-large); margin-bottom: var(--spacing-extra-large); }

  .p-0-m { padding: 0; }
  .p-1-m { padding: var(--spacing-extra-small); }
  .p-2-m { padding: var(--spacing-small); }
  .p-3-m { padding: var(--spacing-medium); }
  .p-4-m { padding: var(--spacing-large); }
  .p-5-m { padding: var(--spacing-extra-large); }

  .pr-0-m { padding-right: 0; }
  .pr-1-m { padding-right: var(--spacing-extra-small); }
  .pr-2-m { padding-right: var(--spacing-small); }
  .pr-3-m { padding-right: var(--spacing-medium); }
  .pr-4-m { padding-right: var(--spacing-large); }
  .pr-5-m { padding-right: var(--spacing-extra-large); }

  .pl-0-m { padding-left: 0; }
  .pl-1-m { padding-left: var(--spacing-extra-small); }
  .pl-2-m { padding-left: var(--spacing-small); }
  .pl-3-m { padding-left: var(--spacing-medium); }
  .pl-4-m { padding-left: var(--spacing-large); }
  .pl-5-m { padding-left: var(--spacing-extra-large); }

  .pb-0-m { padding-bottom: 0; }
  .pb-1-m { padding-bottom: var(--spacing-extra-small); }
  .pb-2-m { padding-bottom: var(--spacing-small); }
  .pb-3-m { padding-bottom: var(--spacing-medium); }
  .pb-4-m { padding-bottom: var(--spacing-large); }
  .pb-5-m { padding-bottom: var(--spacing-extra-large); }

  .pt-0-m { padding-top: 0; }
  .pt-1-m { padding-top: var(--spacing-extra-small); }
  .pt-2-m { padding-top: var(--spacing-small); }
  .pt-3-m { padding-top: var(--spacing-medium); }
  .pt-4-m { padding-top: var(--spacing-large); }
  .pt-5-m { padding-top: var(--spacing-extra-large); }

  .ph-0-m { padding-left: 0; }
  .ph-1-m { padding-left: var(--spacing-extra-small); padding-right: var(--spacing-extra-small); }
  .ph-2-m { padding-left: var(--spacing-small); padding-right: var(--spacing-small); }
  .ph-3-m { padding-left: var(--spacing-medium); padding-right: var(--spacing-medium); }
  .ph-4-m { padding-left: var(--spacing-large); padding-right: var(--spacing-large); }
  .ph-5-m { padding-left: var(--spacing-extra-large); padding-right: var(--spacing-extra-large); }

  .pv-0-m { padding-top: 0; }
  .pv-1-m { padding-top: var(--spacing-extra-small); padding-bottom: var(--spacing-extra-small); }
  .pv-2-m { padding-top: var(--spacing-small); padding-bottom: var(--spacing-small); }
  .pv-3-m { padding-top: var(--spacing-medium); padding-bottom: var(--spacing-medium); }
  .pv-4-m { padding-top: var(--spacing-large); padding-bottom: var(--spacing-large); }
  .pv-5-m { padding-top: var(--spacing-extra-large); padding-bottom: var(--spacing-extra-large); }
}

@media screen and (min-width: 64em) {
  .m-0-l { margin: 0; }
  .m-1-l { margin: var(--spacing-extra-small); }
  .m-2-l { margin: var(--spacing-small); }
  .m-3-l { margin: var(--spacing-medium); }
  .m-4-l { margin: var(--spacing-large); }
  .m-5-l { margin: var(--spacing-extra-large); }

  .mb-0-l { margin-bottom: 0; }
  .mb-1-l { margin-bottom: var(--spacing-extra-small); }
  .mb-2-l { margin-bottom: var(--spacing-small); }
  .mb-3-l { margin-bottom: var(--spacing-medium); }
  .mb-4-l { margin-bottom: var(--spacing-large); }
  .mb-5-l { margin-bottom: var(--spacing-extra-large); }

  .mt-0-l { margin-top: 0; }
  .mt-1-l { margin-top: var(--spacing-extra-small); }
  .mt-2-l { margin-top: var(--spacing-small); }
  .mt-3-l { margin-top: var(--spacing-medium); }
  .mt-4-l { margin-top: var(--spacing-large); }
  .mt-5-l { margin-top: var(--spacing-extra-large); }

  .mh-0-l { margin-left: 0; }
  .mh-1-l { margin-left: var(--spacing-extra-small); margin-right: var(--spacing-extra-small); }
  .mh-2-l { margin-left: var(--spacing-small); margin-right: var(--spacing-small); }
  .mh-3-l { margin-left: var(--spacing-medium); margin-right: var(--spacing-medium); }
  .mh-4-l { margin-left: var(--spacing-large); margin-right: var(--spacing-large); }
  .mh-5-l { margin-left: var(--spacing-extra-large); margin-right: var(--spacing-extra-large); }

  .mv-0-l { margin-top: 0; }
  .mv-1-l { margin-top: var(--spacing-extra-small); margin-bottom: var(--spacing-extra-small); }
  .mv-2-l { margin-top: var(--spacing-small); margin-bottom: var(--spacing-small); }
  .mv-3-l { margin-top: var(--spacing-medium); margin-bottom: var(--spacing-medium); }
  .mv-4-l { margin-top: var(--spacing-large); margin-bottom: var(--spacing-large); }
  .mv-5-l { margin-top: var(--spacing-extra-large); margin-bottom: var(--spacing-extra-large); }

  .p-0-l { padding: 0; }
  .p-1-l { padding: var(--spacing-extra-small); }
  .p-2-l { padding: var(--spacing-small); }
  .p-3-l { padding: var(--spacing-medium); }
  .p-4-l { padding: var(--spacing-large); }
  .p-5-l { padding: var(--spacing-extra-large); }

  .pr-0-l { padding-right: 0; }
  .pr-1-l { padding-right: var(--spacing-extra-small); }
  .pr-2-l { padding-right: var(--spacing-small); }
  .pr-3-l { padding-right: var(--spacing-medium); }
  .pr-4-l { padding-right: var(--spacing-large); }
  .pr-5-l { padding-right: var(--spacing-extra-large); }

  .pl-0-l { padding-left: 0; }
  .pl-1-l { padding-left: var(--spacing-extra-small); }
  .pl-2-l { padding-left: var(--spacing-small); }
  .pl-3-l { padding-left: var(--spacing-medium); }
  .pl-4-l { padding-left: var(--spacing-large); }
  .pl-5-l { padding-left: var(--spacing-extra-large); }

  .pb-0-l { padding-bottom: 0; }
  .pb-1-l { padding-bottom: var(--spacing-extra-small); }
  .pb-2-l { padding-bottom: var(--spacing-small); }
  .pb-3-l { padding-bottom: var(--spacing-medium); }
  .pb-4-l { padding-bottom: var(--spacing-large); }
  .pb-5-l { padding-bottom: var(--spacing-extra-large); }

  .pt-0-l { padding-top: 0; }
  .pt-1-l { padding-top: var(--spacing-extra-small); }
  .pt-2-l { padding-top: var(--spacing-small); }
  .pt-3-l { padding-top: var(--spacing-medium); }
  .pt-4-l { padding-top: var(--spacing-large); }
  .pt-5-l { padding-top: var(--spacing-extra-large); }

  .ph-0-l { padding-left: 0; }
  .ph-1-l { padding-left: var(--spacing-extra-small); padding-right: var(--spacing-extra-small); }
  .ph-2-l { padding-left: var(--spacing-small); padding-right: var(--spacing-small); }
  .ph-3-l { padding-left: var(--spacing-medium); padding-right: var(--spacing-medium); }
  .ph-4-l { padding-left: var(--spacing-large); padding-right: var(--spacing-large); }
  .ph-5-l { padding-left: var(--spacing-extra-large); padding-right: var(--spacing-extra-large); }

  .pv-0-l { padding-top: 0; }
  .pv-1-l { padding-top: var(--spacing-extra-small); padding-bottom: var(--spacing-extra-small); }
  .pv-2-l { padding-top: var(--spacing-small); padding-bottom: var(--spacing-small); }
  .pv-3-l { padding-top: var(--spacing-medium); padding-bottom: var(--spacing-medium); }
  .pv-4-l { padding-top: var(--spacing-large); padding-bottom: var(--spacing-large); }
  .pv-5-l { padding-top: var(--spacing-extra-large); padding-bottom: var(--spacing-extra-large); }
}
</style>

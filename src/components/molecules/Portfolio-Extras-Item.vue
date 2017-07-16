<template lang="pug">
.layout__item.w-100.w-33-m.w-20-l
  .portfolio__item.hover-shrink.ph-1-m.ph-2-l
    a(
      target='_blank' 
      rel='noopener noreferrer' 
      :href='href'
    )
      img.d-b.w-100(
        :src='src' 
        :alt='alt'
      )
      .portfolio__item__content
        .pt-3.pb-4
          p.black.tt-u.ls-1.fw-6.mb-1 {{ heading }}
          p.gray {{ paragraphOne }}
          p.h6.gray {{ paragraphTwo }}

</template>

<script>
export default {
  name: 'portfolio-extras-item',
  props: {
    alt: { default: '[PH] Alt' },
    heading: { default: '[PH] Heading' },
    href: { default: '' },
    paragraphOne: { default: '[PH] Paragraph 1' },
    paragraphTwo: { default: '[PH] Paragraph 2' },
    src: { default: '' }
  }
}
</script>

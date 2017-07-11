
<template>
  <div class="grid  bg-g  pv-4">

<div class="page">

  <h2 class="mb-1  fw-6">Holden</h2>
  <p class="mb-3">In July 2016, Holden embarked on a rebranding of the company. </p>

  <div class="d-g  gg  gtr-2  gtc-3">

    <!-- Column 1 -->
    <a href="https://www.holden.com.au/cars/commodore" target="_blank" class="carlines  grs-1  gre-3  gcs-1  gce-2  as-s">
      <div class="p-ac">
        <h4>Holden</h4>
        <h4>Commodore</h4>
      </div>
    </a>

    <!-- Column 2 -->
    <a href="https://www.holden.com.au/cars/commodore/limited-edition" target="_blank" class="commodore  grs-1  gre-2  gcs-2  gce-4  as-s">
      <div class="p-ac">
        <h4>Holden Commodore</h4>
        <h4>Limited Edition</h4>
      </div>
    </a>

    <a href="https://www.holden.com.au/accessories/colorado" target="_blank" class="colorado  grs-2  gre-3  gcs-2  gce-3  as-s">
      <div class="p-ac">
        <h4>Holden Colorado</h4>
        <h4>Accessories</h4>
      </div>
    </a>

    <!-- Column 3 -->
    <a href="https://www.holden.com.au/cars/colorado" target="_blank" class="carlines  grs-2  gre-3  gcs-3  gce-4  as-s">
      <div class="p-ac">
        <h4>Holden</h4>
        <h4>Colorado</h4>
      </div>
    </a>

  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'Grid',
  data() {
    return {
      title: 'Kayd Withers',
      titleSub: 'Front End Developer'
    }
  },
}
</script>

<style>
:root {
  --row-height: 300px;
  --column-width: 1fr;
}

.carlines { 
  background: url('https://res.cloudinary.com/dvjpaoffl/image/upload/v1486636435/cure-wounds_yral10.jpg') no-repeat 0 0 / cover;
  transition: 2s background;
  will-change: background;
}

  .carlines:hover { 
    background: 
      linear-gradient(to bottom, white 0%, black 100%), 
      url('https://res.cloudinary.com/dvjpaoffl/image/upload/v1486636435/cure-wounds_yral10.jpg') no-repeat 0 0 / cover;
    background-blend-mode: soft-light;
  }

.commodore { background: url('https://res.cloudinary.com/dvjpaoffl/image/upload/v1486636435/cure-wounds_yral10.jpg') no-repeat 0 0 / cover; }
.colorado { background: url('https://res.cloudinary.com/dvjpaoffl/image/upload/v1486636435/cure-wounds_yral10.jpg') no-repeat 0 0 / cover; }

.d-g   { display: grid; }
.gg    { grid-gap: var(--spacing); }
.gtr-2 { grid-template-rows: repeat(2, var(--row-height)); }
.gtr-3 { grid-template-rows: repeat(3, var(--row-height)); }
.gtr-6 { grid-template-rows: repeat(6, var(--row-height)); }
.gtc-3 { grid-template-columns: repeat(3, var(--column-width)); }

.ai-c  { align-items: center; }
.ai-s  { align-items: stretch; }

.as-c  { align-self: center; }
.as-s  { align-self: stretch; }

@supports (display: grid) {
  .display-grid { display: grid; }
}

/* Grid Columns */
.gcs-1  { grid-column-start: 1 }
.gcs-2  { grid-column-start: 2 }
.gcs-3  { grid-column-start: 3 }
.gcs-4  { grid-column-start: 4 }
.gcs-5  { grid-column-start: 5 }
.gcs-6  { grid-column-start: 6 }
.gcs-7  { grid-column-start: 7 }
.gcs-8  { grid-column-start: 8 }
.gcs-9  { grid-column-start: 9 }
.gcs-10 { grid-column-start: 10 }
.gcs-11 { grid-column-start: 11 }
.gcs-12 { grid-column-start: 12 }

.gce-2  { grid-column-end: 2 }
.gce-3  { grid-column-end: 3 }
.gce-4  { grid-column-end: 4 }
.gce-5  { grid-column-end: 5 }
.gce-6  { grid-column-end: 6 }
.gce-7  { grid-column-end: 7 }
.gce-8  { grid-column-end: 8 }
.gce-9  { grid-column-end: 9 }
.gce-10 { grid-column-end: 10 }
.gce-11 { grid-column-end: 11 }
.gce-12 { grid-column-end: 12 }

.grs-1  { grid-row-start: 1 }
.grs-2  { grid-row-start: 2 }
.grs-3  { grid-row-start: 3 }
.grs-4  { grid-row-start: 4 }
.grs-5  { grid-row-start: 5 }
.grs-6  { grid-row-start: 6 }
.grs-7  { grid-row-start: 7 }
.grs-8  { grid-row-start: 8 }
.grs-9  { grid-row-start: 9 }
.grs-10 { grid-row-start: 10 }
.grs-11 { grid-row-start: 11 }
.grs-12 { grid-row-start: 12 }

.gre-2  { grid-row-end: 2 }
.gre-3  { grid-row-end: 3 }
.gre-4  { grid-row-end: 4 }
.gre-5  { grid-row-end: 5 }
.gre-6  { grid-row-end: 6 }
.gre-7  { grid-row-end: 7 }
.gre-8  { grid-row-end: 8 }
.gre-9  { grid-row-end: 9 }
.gre-10 { grid-row-end: 10 }
.gre-11 { grid-row-end: 11 }
.gre-12 { grid-row-end: 12 }

.bg-g { background-color: #f2f2f2; }

</style>

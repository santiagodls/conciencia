<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'

@Component({ components: { TheHeader } })
export default class Index extends Vue {

}
</script>

<template lang="pug">
.index-page
  TheHeader

  section.section#servicios
    .section-text
      h1.section-title Trabajando por causas que importan
      p Colaboramos con <b>ONGs</b> y <b>Organizaciones de carácter social</b> para que alcancen <b>sus objetivos</b> a través de campañas <b>Face-to-face, asesoramiento y formaciones especificas</b>.
    img.section-image(src="@/static/img1.png")

  section.section.reverse
    .section-text
      h1.section-title Comunicamos, concienciamos, hacemos fundraising
      p El Fundraising es <b>ese mágico circuito</b> que permite <b>conectar a Donantes, ONGs y Beneficiarios/as</b>. Queremos que Conciencia sea el hilo conductor que lo haga posible.
    img.section-image(src="@/static/img2.svg")

</template>

<style lang="stylus" scoped>
.index-page
  width: 100%;
  height: 100%;

.section
  display: flex;
  position: relative;
  min-height: 40em;
  padding: 6em 4em;

  &.reverse
    flex-direction: row-reverse;

  &+.section
    margin-top: 6em;

  &-text
    max-width: 35em;

  &-title
    font-family: 'Roboto Condensed';
    font-size: 3.8em;
    line-height: 1;
    margin-bottom: .5em;

  &-image
    z-index: -1;
    &[src*='img1.png']
      position: absolute;
      top: -2em; right: -2em;
    &[src*='img2.svg']
      position: absolute;
      top: -2em;
      left: -2em;

</style>

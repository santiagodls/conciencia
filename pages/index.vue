<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'
import TheContactForm from '@/components/TheContactForm.vue'
import TheFooter from '@/components/TheFooter.vue'
import ComingSoon from '@/components/ComingSoon.vue'

@Component({ components: { TheHeader, TheContactForm, TheFooter, ComingSoon } })
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
    img.section-image.img1(src="@/static/img1.png")

  section.section.reverse
    .section-text
      h1.section-title Comunicamos, concienciamos, hacemos fundraising
      p El Fundraising es <b>ese mágico circuito</b> que permite <b>conectar a Donantes, ONGs y Beneficiarios/as</b>. Queremos que Conciencia sea el hilo conductor que lo haga posible.
    img.section-image.img2(src="@/static/img2.svg")

  section.section#nosotros
    .section-text
      h1.section-title Con el mejor de los equipos
      p <b>El valor y el corazón</b> de conciencia. Son ellos y ellas <b>quienes conciencian y conectan</b> día a día a cientos de personas con las distintas realidades y las organizaciones a las que representan.
    img.section-image.img3(src="@/static/img3.png")

  section.section.with-columns.auto-height
    .section-column
      img.section-column-image(src="@/static/img4.svg")
      h2.section-column-title.section-title Unidos por nuestra pasión
      p Nuestra pasión de apoyar la labor de las ONG’s con las que nos sintamos alineados/as, a través de una captación de fondos en <b>equipo</b>, de forma <b>ética y responsable</b>.
    .section-column
      img.section-column-image(src="@/static/img5.svg")
      h2.section-column-title.section-title Con una meta bien clara
      p Crear un proyecto en el que las personas que formen parte de él <b>disfruten de su trabajo</b>, se sientan <b>valoradas, realizadas y acompañadas</b>.
    .section-column
      img.section-column-image(src="@/static/img6.svg")
      h2.section-column-title.section-title Con las mejores herramientas
      p Formados en <b>Coaching personal y sistémico, Marketing, gestión comercial y Psicología</b>. Llevamos más de 15 años captando y liderando campañas de face-to-face.

  section.section.reverse.no-margin#contacto
    .section-text.xl
      h1.section-title El momento de iniciar nuestra propia aventura ¿Te unes?
      p Tanto si eres una <b>ONG</b> como si quieres <b>trabajar con nosotros</b>, contáctanos, estaremos encantados y encantadas de atenderte. ¡Conciencia con nosotros!
      TheContactForm
    img.section-image.img7(src="@/static/img7.png")

  TheFooter

  ComingSoon

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'

.index-page
  display: flex;
  flex-direction: column;
  align-items: center;
  > *
    width: 100%;
    height: 100%;

.header,
.section
  max-width: $app-max-width;

.section
  display: flex;
  position: relative;
  padding: 6em 4em;

  &:not(.auto-height)
    min-height: 40em;

  &.reverse
    flex-direction: row-reverse;

  &.with-columns
    justify-content: space-around;

  &+.section:not(.no-margin)
    margin-top: 6em;

  &-text
    max-width: 35em;
    &.xl
      max-width: 40em;

  &-title
    font-family: 'Roboto Condensed';
    font-size: 3.8em;
    line-height: 1;
    margin-bottom: .5em;

  &-image
    z-index: -1;
    &.img1
      position: absolute;
      top: -2em; right: -2em;
    &.img2
      width: 38em;
      position: absolute;
      top: -2em; left: -2em;
    &.img3
      position: absolute;
      top: -10em; left: -4em;
    &.img7
      position: absolute;
      top: 8em; left: 2em;

.section-column
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22em;
  text-align: center;
  margin: 0 2em;
  flex: 1;

  &-image
    max-width: 14em;
    margin-bottom: 1em;

  &-title
    font-size: 2.5em;
</style>

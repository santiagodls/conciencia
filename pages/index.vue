<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'
import TheContactForm from '@/components/TheContactForm.vue'
import TheFooter from '@/components/TheFooter.vue'

@Component({ components: { TheHeader, TheContactForm, TheFooter } })
export default class Index extends Vue {

}
</script>

<template lang="pug">
.index-page
  TheHeader

  section.section.section1#servicios
    .section-text
      h1.section-title Trabajando por causas que importan
      p Colaboramos con <b>ONGs</b> y <b>Organizaciones de carácter social</b> para que alcancen <b>sus objetivos</b> a través de campañas <b>Face-to-face, asesoramiento y formaciones especificas</b>.
    picture
      source(media="(max-width: 720px)" srcset="@/static/img1-mobile.png")
      img.section-image(src="@/static/img1.png")

  section.section.section2.reverse
    .section-text
      h1.section-title Comunicamos, concienciamos, hacemos fundraising
      p El Fundraising es <b>ese mágico circuito</b> que permite <b>conectar a Donantes, ONGs y Beneficiarios/as</b>. Queremos que Conciencia sea el hilo conductor que lo haga posible.
    img.section-image(src="@/static/img2.svg")

  section.section.section3#nosotros
    .section-text
      h1.section-title Con el mejor de los equipos
      p <b>El valor y el corazón</b> de conciencia. Son ellos y ellas <b>quienes conciencian y conectan</b> día a día a cientos de personas con las distintas realidades y las organizaciones a las que representan.
    picture
      source(media="(max-width: 720px)" srcset="@/static/img3-mobile.png")
      img.section-image(src="@/static/img3.png")

  section.section.section4
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

  section.section.section5.reverse#contacto
    .section-text.xl
      h1.section-title El momento de iniciar nuestra propia aventura ¿Te unes?
      p Tanto si eres una <b>ONG</b> como si quieres <b>trabajar con nosotros</b>, contáctanos, estaremos encantados y encantadas de atenderte. ¡Conciencia con nosotros!
      TheContactForm
    picture
      source(media="(max-width: 720px)" srcset="@/static/img7-mobile.png")
      img.section-image(src="@/static/img7.png")

  TheFooter

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'
@import '~@/assets/mixins';

.index-page
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--header-height);
  +mobile()
    overflow: hidden;

  > *
    width: 100%;

.header,
.section
  max-width: var(--max-width);

.section
  display: flex;
  position: relative;
  padding: 6em 4em;
  margin-top: 6em;

  +mobile()
    width: 100%;
    padding: 1.5em;

  &.reverse
    flex-direction: row-reverse;

  &-text
    max-width: 35em;
    &.xl
      max-width: 40em;

  &-title
    font-family: 'Roboto Condensed';
    font-size: 3.8em;
    line-height: 1;
    margin-bottom: .5em;
    +mobile()
      font-size: 2.2em;

  &-image
    z-index: -1;

.section1
  height: 42em;
  margin: 0;
  +mobile()
    margin-top: 2em;
    height: 60em;

  .section-image
    position: absolute;
    top: -2em; right: -2em;
    +mobile()
      width: 42em;
      top: 12em; right: -15em;

.section2
  height: 45em;
  +mobile()
    height: 25em;

  .section-image
    width: 38em;
    position: absolute;
    top: -2em; left: -2em;
    +mobile()
      width: 27em;
      top: -11em; right: -8em;
      left: unset;

.section3
  height: 36em;

  .section-image
    position: absolute;
    top: -10em; left: -4em;
    +mobile()
      width: 32em;
      top: -2em;

.section4
  justify-content: space-around;
  +mobile()
    flex-direction: column;
    align-items: center;

  .section-column
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 22em;
    text-align: center;
    margin: 0 2em;
    flex: 1;
    +mobile()
      max-width: 15em;
      margin: 0 0 4em;
    &-image
      max-height: 9em;
      margin-bottom: 1em;
      +mobile()
        max-width: 10em;
        max-height: 8em;
    &-title
      font-size: 2.5em;
      +mobile()
        font-size: 2em;

.section5
  margin: 0;
  +mobile()
    margin-top: 18em;

  .section-image
    position: absolute;
    top: 8em; left: 2em;
    +mobile()
      max-width: 28em;
      top: -18em; left: 50%;
      transform: translateX(-50%);

</style>

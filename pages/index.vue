<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheContactForm from '@/components/TheContactForm.vue'
import TheHiringModal from '@/components/TheHiringModal.vue'

@Component({ components: { TheContactForm, TheHiringModal } })
export default class Index extends Vue {}

</script>

<template lang="pug">
main
  section.section.section1#servicios
    .section-text
      h1.section-title Trabajando por causas que importan
      p Colaboramos con <b>ONGs</b> y <b>Organizaciones de carácter social</b> para que alcancen <b>sus objetivos</b> a través de campañas <b>Face-to-face, asesoramiento y formaciones especificas</b>.
    picture
      source(media="(max-width: 780px)" srcset="@/static/img1-mobile.png")
      img.section-image(src="@/static/img1.png")

  section.section.section2.reverse
    .section-text
      h1.section-title Comunicamos, concienciamos, hacemos fundraising
      p El Fundraising es <b>ese mágico circuito</b> que permite <b>conectar a Donantes, ONGs y Beneficiarios/as</b>. Queremos que Conciencia sea el hilo conductor que lo haga posible. Por ello, <b>nos sentimos muy orgullosos de estar trabajando actualmente con estas organizaciones</b>:
      img.partner-logo(src="@/static/medicosdelmundo.png")
    img.section-image(src="@/static/img2.svg")

  section.section.section3#nosotros
    .section-text
      h1.section-title Con el mejor de los equipos
      p <b>El valor y el corazón</b> de conciencia. Son ellos y ellas <b>quienes conciencian y conectan</b> día a día a cientos de personas con las distintas realidades y las organizaciones a las que representan.
    picture
      source(media="(max-width: 1280px)" srcset="@/static/img3-mobile.png")
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
      source(media="(max-width: 780px)" srcset="@/static/img7-mobile.png")
      img.section-image(src="@/static/img7.png")

  TheHiringModal

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'
@import '~@/assets/mixins';

.section
  page-section();

.section1
  height: 42em;
  margin: 0;
  +tablet()
    height: 48em;
  +mobile()
    margin-top: 2em;
    height: 62em;

  .section-text
    text-shadow: 0px 0px 4px white;

  .section-image
    position: absolute;
    top: -2em; right: -2em;
    +tablet()
      width: 80vw;
      min-width: 50em;
      top: 6em; right: -8em;
    +mobile()
      width: 42em;
      min-width: unset;
      top: 10em; right: -15em;
    +mobile-landscape()
      top: 6em; right: -10em;

.section2
  height: 45em;
  +tablet()
    height: 32em;
  +mobile()
    height: 25em;
  +mobile-landscape()
    height: 18em;

  .section-image
    width: 38em;
    position: absolute;
    top: -2em; left: -2em;
    +tablet()
      width: 32em;
      top: -8em; left: -7em;
    @media (min-width: 781px) and (max-width: 1050px)
      display: none;
    +mobile()
      width: 27em;
      top: -17em; right: -8em;
      left: unset;

.section3
  height: 36em;
  +tablet()
    height: 40em;

  .section-image
    position: absolute;
    top: -10em; left: -4em;
    +tablet()
      width: 38em;
      top: -4em; right: -2em;
      left: unset;
    +mobile()
      width: 32em;
      top: -2em; left: -4em;
      right: unset;

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
      height: 9em;
      margin-bottom: 1em;
      +mobile()
        // max-width: 10em;
        height: 8em;
    &-title
      font-size: 2.5em;
      +tablet()
        font-size: 2.2em;
      +mobile()
        font-size: 2em;

.section5
  margin: 0;
  +tablet()
    margin-top: 6em;
  +mobile()
    margin-top: 18em;

  .section-image
    position: absolute;
    top: 8em; left: 2em;
    +tablet()
      max-width: 28em;
      left: -4em;
    @media (min-width: 781px) and (max-width: 1050px)
      display: none;
    +mobile()
      max-width: 28em;
      top: -19em; left: 50%;
      transform: translateX(-50%);

.partner-logo
  width: 6em;
  height: 6em;
  margin-top: 2em;
  filter: grayscale(1);
  opacity: .7;
  +mobile()
    width: 5em;
    height: 5em;

</style>

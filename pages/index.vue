<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Hooper, Slide } from 'hooper'
import TheContactForm from '@/components/TheContactForm.vue'

import 'hooper/dist/hooper.css'

@Component({ components: { TheContactForm, Hooper, Slide } })
export default class Index extends Vue {}

</script>

<template lang="pug">
main
  section.section#servicios
    .section-text
      .slide-text-wrapper
        h1.section-title Trabajando por causas que importan
        p Colaboramos con <b>ONGs</b> y <b>Organizaciones de carácter social</b> para que alcancen <b>sus objetivos</b> a través de <b>campañas de fundraising, asesoramiento y formaciones específicas</b>.
    hooper(
      :autoPlay="true"
      :centerMode="true"
      :wheelControl="false"
      :playSpeed="3750"
      :transition="750"
    )
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/01@mobile.jpg")
          source(media="(min-width: 1290px)" srcset="@/static/slides/01@desktop.jpg")
          img(src="@/static/slides/01.jpg")
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/02@mobile.jpg")
          source(media="(min-width: 1290px)" srcset="@/static/slides/02@desktop.jpg")
          img(src="@/static/slides/02.jpg")
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/03@mobile.jpg")
          source(media="(min-width: 1290px)" srcset="@/static/slides/03@desktop.jpg")
          img(src="@/static/slides/03.jpg")
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/04@mobile.jpg")
          source(media="(min-width: 1290px)" srcset="@/static/slides/04@desktop.jpg")
          img(src="@/static/slides/04.jpg")
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/05@mobile.jpg")
          img(src="@/static/slides/05.jpg")
      slide
        picture
          source(media="(max-width: 640px)" srcset="@/static/slides/06@mobile.jpg")
          img(src="@/static/slides/06.jpg")

  section.section.reverse
    .section-text
      h1.section-title Comunicamos, concienciamos, hacemos fundraising
      p El Fundraising es ese <b>mágico circuito</b> que permite <b>conectar a Donantes, ONGs y Beneficiarios/as</b>. Desde Conciencia queremos ser ese hilo conductor que lo haga posible a través de campañas de <b>Face to Face y Telemarketing</b>.
      p Actualmente Concienciamos para estas organizaciones:
      img.partner-logo(src="@/static/medicosdelmundo.png")
      img.partner-logo#greenpeace-logo(src="@/static/greenpeace.png")
    img.section-image(src="@/static/img2.svg")

  section.section#nosotros
    .section-text
      h1.section-title El valor y el corazón de Conciencia
      p Son ellos y ellas <b>quienes conciencian y conectan</b> día a día a cientos de personas con las distintas realidades y las organizaciones a las que representan.
    picture
      source(media="(max-width: 1280px)" srcset="@/static/img3@mobile.png")
      img.section-image(src="@/static/img3.png")

  section.section
    .section-column
      img.section-column-image(src="@/static/img4.svg")
      h2.section-column-title.section-title Unid@s por un propósito
      p <b>Creemos</b> en las organizaciones con las que trabajamos y <b>en las causas</b> que defienden. Por ello estamos orgullos@s de ayudarlas a llevar a cabo sus proyectos, a través de una captación de fondos <b>en equipo, ética y transparente</b>.
    .section-column
      img.section-column-image(src="@/static/img5.svg")
      h2.section-column-title.section-title Con una meta bien clara
      p Crear un proyecto en el que las personas que formen parte de él <b>disfruten de lo que hacen</b>, se sientan <b>valoradas y acompañadas</b>.
    .section-column
      img.section-column-image(src="@/static/img6.svg")
      h2.section-column-title.section-title Disfrutando del camino
      p Hace ya más de 15 años que nos pusimos nuestro primer chaleco. En este viaje no hemos dejado de <b>amar lo que hacemos</b>, ilusionarnos con <b>nuevos retos</b> y seguir sumando </b>aprendizajes y experiencias</b>.

  section.section.reverse#contacto
    .section-text.xl
      h1.section-title El momento de iniciar nuestra propia aventura ¿Te unes?
      p Eres una organización, quieres trabajar con nosotr@s, o te apetece proponernos una idea? Contáctanos! estaremos encantados y encantadas de escucharte. ¡Conciencia con nosotr@s!
      TheContactForm
    img.section-image(src="@/static/img7.png")

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'
@import '~@/assets/mixins';

.section
  page-section();
  &:not(:nth-child(1))
    max-width: var(--max-width);
    width: 100%;

.section:nth-child(1)
  height: 80vh;
  margin: 0 0 4em 0;
  position: relative;
  z-index: 1;
  +mobile()
    padding: 3em;
    margin-bottom: 15em;

  .hooper
    width: 100%; height: 100%;
    position: absolute;
    top: 0; left: 0;
    overflow: hidden;
    z-index: -1;

  .hooper img
    width: 100%; height: 100%;
    object-fit: cover;

  .slide-text-wrapper
    background: rgba(255, 255, 255, .5);
    padding: 2em;

  .section-text
    +tablet()
      display: flex;
      align-items: flex-end;
    +mobile()
      display: flex;
      align-items: flex-end;

.section:nth-child(2)
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

.section:nth-child(3)
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

.section:nth-child(4)
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

.section:nth-child(5)
  margin: 0;
  +tablet()
    margin-top: 6em;
  +mobile()
    margin-top: 24em;

  .section-image
    position: absolute;
    top: 8em; left: 0;
    +tablet()
      max-width: 28em;
      left: -4em;
    @media (min-width: 781px) and (max-width: 1050px)
      display: none;
    +mobile()
      max-width: 28em;
      top: -24em; left: 50%;
      transform: translateX(-50%);

.partner-logo
  width: 6em;
  height: 6em;
  margin-top: 2em;
  &#greenpeace-logo
    width: auto;
  +.partner-logo
    margin-left: 2em;
    +mobile()
      margin-left: 1em;
  +mobile()
    width: 5em;
    height: 5em;

</style>

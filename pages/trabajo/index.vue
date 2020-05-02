<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheContactForm from '@/components/TheContactForm.vue'

@Component({ components: { TheContactForm } })
export default class WorkWithUs extends Vue {}
</script>

<template lang="pug">
main
  section.hero-section
    .text-wrapper
      h1.title
        span.old Trabaja
        span &nbsp;
        span.new Conciencia con nosotros
      h2.subtitle ¿Interesad@ en formar parte de nuestra familia?
    img(src='@/static/wave1.svg')

  section.info-section
    img.section-image(src='img10.png')
    .section-text
      p Desde CONCIENCIA tenemos un objetivo bien claro: <b>disfrutar trabajando para organizaciones con las que nos sentimos alinead@s</b>, a través de un <b>fundraising responsable y transparente</b>.
      p Te ofrecemos <b>formar parte de un proyecto social que cambia realidades</b>, dónde recibirás formación y apoyo constante.
      p Tu función será <b>informar y concienciar a la población</b> sobre los diferentes proyectos de Médicos del Mundo, con el objetivo de que se sumen a la causa y colaboren con la organización.

  section.section.section1#telemarketing
    .section-text
      h1.section-title Oferta en telemarketing
      ul.section-list
        li Teletrabaja <b>desde donde quieras</b> y elije <b>tu propio horario</b>
        li Contrato laboral con <b>alta en la seguridad social desde el primer día</b>
        li <b>Sueldo base + incentivos</b>
        li Horario <b>de lunes a viernes, 4 horas y media al día</b>: 4 horas de captación + 30 minutos formación
    img.section-image(src='img8.svg')

  section.section.section2.reverse#face2face
    .section-text
      h1.section-title Oferta en face2face
      .message
        p Debido a la situación actual, <b>nuestra oferta</b> para trabajar en la campaña face2face <b>permanece cerrada</b> hasta que podamos salir a captar a la calle sin ningún tipo de riesgo.
    img.section-image(src='img9.svg')

  section.section.section3#contacto
    .section-text
      h1.section-title ¿Te interesa alguna de nuestras ofertas?
      p Contáctanos, estaremos encantados y encantadas de leer tu solicitud.
      TheContactForm(
        message-placeholder='Cuéntanos sobre ti'
      )

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';

main
  padding-top: 0;

.section
  page-section();
  margin: 0;
  align-items: center;
  padding: 0 4em;
  +mobile()
    padding: 0 1.5em;

.hero-section
  position: relative;
  display: flex;
  justify-content: center;
  max-width: unset;
  background: $app-yellow;
  padding-top: calc(var(--header-height) + 4em);
  +mobile()
    font-size: .6em;
    padding-top: calc(var(--header-height) + 8em);

  .text-wrapper
    max-width: var(--max-width);
    text-align: center;

  img
    position: absolute;
    left: 0; bottom: -15vw;
    z-index: -1;

  .title
    font-family: 'Roboto Condensed';
    font-size: 5em;
    .old
      text-decoration: line-through;

  .subtitle
    font-size: 2em;
    font-weight: normal;

.info-section
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 40em;
  margin-top: 4em;

  img
    flex-shrink: 0;
    margin: -12em 0 4em 0;
    width: 20em;
    z-index: 0;
    +mobile()
      margin-top: -6em;

  p
    margin-bottom: .5em;

.message
  padding: 2em;
  border-radius: 8px;
  border: 8px solid $paper-amber-500;

#telemarketing,
#face2face
  +until-tablet()
    flex-direction: column;

  .section-image
    +mobile()
      width: 25em;

#contacto
  justify-content: center;
  margin-top: 4em;

</style>

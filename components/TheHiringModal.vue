<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Portal } from 'portal-vue'
import AppButton from '@/components/AppButton.vue'

@Component({ components: { Portal, AppButton } })
export default class TheHiringModal extends Vue {
  get hadBeenDisplayed () {
    return process.client && localStorage.getItem('hiring-displayed')
  }

  mounted () {
    if (!this.hadBeenDisplayed) {
      localStorage.setItem('hiring-displayed', '1')
      this._disableBodyScroll()
    }
  }

  destroyed () {
    this._enableBodyScroll()
  }

  close () {
    this.$destroy()
  }

  private _disableBodyScroll () {
    document.body.style.overflow = 'hidden'
  }

  private _enableBodyScroll () {
    document.body.style.overflow = ''
  }

  private _onBackdropClicked () {
    this.close()
  }

  private _onConfirmButtonClicked () {
    this.$router.push('/trabajo')
  }

  private _onDismissButtonClicked () {
    this.close()
  }
}
</script>

<template lang="pug">
Portal(to='modals-container')
  .the-hiring-modal(
    v-if='!hadBeenDisplayed'
  )
    .modal
      h1.modal-title
        span.old Trabaja
        span &nbsp;
        span.new Conciencia con nosotr@s desde casa
      p.modal-message
        | <b>Teletrabaja desde donde quieras y elije tu propio horario</b>.
        | Te ofrecemos formar parte de <b>un proyecto social que cambia realidades</b>, dónde recibirás formación y apoyo constante.

      footer.footer
        AppButton.confirm-button(
          @click.native='_onConfirmButtonClicked'
        ) Estoy interesado!

    .backdrop(
      @click='_onBackdropClicked'
    )

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';

.the-hiring-modal
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0; left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;

.modal
  background: white;
  padding: 3em 3em 2.5em 3em;
  margin: 1em;
  border-radius: 8px;
  max-width: 40em;

  animation: modal-entry-animation .35s ease-out .35s forwards;
  margin-left: -10em;
  opacity: 0;

  &-title
    font-family: 'Roboto Condensed';
    font-size: 1.5em;
    margin-bottom: .5em;
    .old
      text-decoration: line-through;

  &-message
    margin-bottom: 1.5em;

.confirm-button
  float: right;
  font-size: 1.2em;

.backdrop
  position: absolute;
  top: 0; left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(135, 144, 191, .7) 0%, rgb(0, 0, 0) 100%);

  animation: backdrop-entry-animation .25s ease-in forwards;
  opacity: 0;

@keyframes modal-entry-animation
  to
    margin-left: 0;
    opacity: 1;

@keyframes backdrop-entry-animation
  to
    opacity: 1;

</style>

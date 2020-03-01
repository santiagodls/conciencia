<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TheContactForm extends Vue {

}
</script>

<template lang="pug">
form.contact-form
  input.form-field(placeholder='Nombre')
  input.form-field(placeholder='Teléfono / email de contacto')
  textarea.form-field(placeholder='¿En qué te podemos ayudar?' rows='6')
  input.submit-button(type='submit' value='Contactar')
</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';

.form-field
  width: 100%;
  padding: 1.25em 2em;
  border: 6px solid $dark-text-primary;
  border-radius: 2em;
  margin-top: 2em;

.submit-button
  background: $app-yellow;
  font-family: 'Roboto Condensed';
  font-size: 1.5em;
  padding: .5em 2em;
  border: none;
  border-radius: 2em;
  margin-top: 1em;
  float: right;

</style>

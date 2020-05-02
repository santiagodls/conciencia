<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TheContactForm extends Vue {
  @Prop({ type: String, default: '¿En qué te podemos ayudar?' }) messagePlaceholder!: string
}
</script>

<template lang="pug">
form.contact-form(
  method='POST'
  action='https://formspree.io/info@concienciafundraising.es'
)
  input.hpot(name='_gotcha')
  input.form-field(placeholder='Nombre' name='name')
  input.form-field(placeholder='Teléfono / email de contacto' name='contact')
  textarea.form-field(:placeholder='messagePlaceholder' name='message' rows='6')
  input.submit-button(type='submit' value='Contactar')
</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';

.form-field
  width: 100%;
  padding: 1.25em 2em;
  border: 6px solid $dark-text-primary;
  border-radius: 2em;
  margin-top: 2em;
  +mobile()
    border-width: 5px;

.submit-button
  background: $app-yellow;
  font-family: 'Roboto Condensed';
  font-size: 1.5em;
  padding: .5em 2em;
  border: none;
  border-radius: 2em;
  margin-top: 1em;
  float: right;

.hpot
  display: none;

</style>

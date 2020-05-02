<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export type ButtonMode = 'filled' | 'flat'

@Component
export default class AppButton extends Vue {
  @Prop({ type: String, default: 'filled' }) mode!: ButtonMode
  @Prop(String) type!: string
  @Prop(String) submitValue!: string
  @Prop(Boolean) flat!: boolean
}
</script>

<template lang="pug">
.app-button(:class='mode')
  input(
    v-if='type === "submit"'
    type='submit'
    :value='submitValue'
  )
  span(v-else)
    slot

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';

.app-button
  display: inline-flex;
  font-family: 'Roboto Condensed';
  font-size: 1.5em;
  cursor: pointer;

  &.filled > *
    background: $app-yellow;
    border-radius: 2em;
    padding: .5em 2em;

  input
    border: none;
    font-family: inherit;
    font-size: inherit;

</style>

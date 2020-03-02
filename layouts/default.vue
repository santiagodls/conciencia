<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NonSupported from '@/components/NonSupported.vue'

@Component({ components: { NonSupported } })
export default class DefaultTemplate extends Vue {
  supportedDevice: boolean = true

  mounted () {
    this._computeSupport()
    window.addEventListener('resize', this._computeSupport.bind(this))
  }

  private _computeSupport () {
    this.supportedDevice = process.client && window.outerWidth > 1380
  }
}
</script>

<template lang="pug">
  nuxt(v-if='supportedDevice')
  NonSupported(v-else)
</template>

<style lang="stylus">
html
  font-family: 'Source Sans Pro';
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

html,
body,
#__nuxt,
#__layout
  width: 100%;
  height: 100%;

body
  overflow-x: hidden;

*,
*:before,
*:after
  box-sizing: border-box;
  margin: 0;
</style>

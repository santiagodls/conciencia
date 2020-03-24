<template lang="pug">
  main.main-wrapper
    TheHeader
    nuxt.main-content
    TheFooter

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

@Component({ components: { TheHeader, TheFooter } })
export default class Layout extends Vue {}

</script>

<style lang="stylus">
@import '~@/assets/theme';
@import '~@/assets/mixins';
@import '~@/assets/reset';

:root
  --max-width: 80em;
  --header-height: 6em;
  +tablet()
    --header-height: 5em;
  +mobile()
    --header-height: 4.5em;

html
  font-family: 'Source Sans Pro';
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  +mobile()
    font-size: 16px;

html,
body,
.main-wrapper
#__nuxt,
#__layout
  width: 100%;
  height: 100%;
  scroll-padding-top: var(--header-height);

body
  overflow-x: hidden;
  &.no-scroll
    overflow-y: hidden;

.main
  &-wrapper,
  &-content
    display: flex;
    flex-direction: column;
    align-items: center;

  &-content
    width: 100%;
    padding-top: var(--header-height);
    flex: 1;
    > *
      padding: 6em 4em;
      width: 100%;
      max-width: var(--max-width);

</style>

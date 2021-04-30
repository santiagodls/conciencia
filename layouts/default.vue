<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { PortalTarget } from 'portal-vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

@Component({ components: { TheHeader, TheFooter, PortalTarget } })
export default class Layout extends Vue {}
</script>

<template lang="pug">
  main.main-wrapper
    TheHeader(:key='$route.name')
    nuxt.main-content
    TheFooter

    PortalTarget(name='modals-container')

</template>

<style lang="stylus">
@import '~@/assets/theme';
@import '~@/assets/mixins';
@import '~@/assets/reset';

:root
  --max-width: 80em;
  --header-height: 5em;
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
  &-content
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100%;
    padding-top: var(--header-height);
    overflow-x: hidden;
    > *
      width: 100%;
      padding: 6em 4em;

</style>

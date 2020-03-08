<template lang="pug">
  nuxt
</template>

<style lang="stylus">
@import '~@/assets/theme';
@import './mixins'

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
#__nuxt,
#__layout
  width: 100%;
  height: 100%;
  scroll-padding-top: var(--header-height);

body
  overflow-x: hidden;
  &.no-scroll
    overflow-y: hidden;

*,
*:before,
*:after
  box-sizing: border-box;
  margin: 0;

</style>

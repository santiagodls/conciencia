<template lang="pug">
  nuxt
</template>

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
  font-size: 18px;
  +mobile()
    font-size: 16px;

html,
body,
#__nuxt,
#__layout
  scroll-padding-top: var(--header-height);

body
  overflow-x: hidden;
  &.no-scroll
    overflow-y: hidden;

</style>

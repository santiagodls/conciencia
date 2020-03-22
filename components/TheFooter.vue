<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppIcon from '@/components/AppIcon.vue'

@Component({ components: { AppIcon } })
export default class TheFooter extends Vue {

}
</script>

<template lang="pug">
footer.footer
  .inner-footer
    .left-section
      .social
        AppIcon(size='48' icon='twitter')
        AppIcon(size='48' icon='youtube')
        AppIcon(size='48' icon='facebook')

    .right-section
      img.logo(src='@/static/logo.svg')

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'
@import '~@/assets/mixins';

$footer-margin = 16em;
$footer-background = #cfd8dc;

.footer
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: $footer-margin;
  background: $footer-background;

  &::before
    content: '';
    width: 0; height: 0;
    border-style: solid;
    border-width: 'calc(%s / 2) 0 0 100vw' % $footer-margin;
    border-color: transparent transparent transparent $footer-background;
    position: absolute;
    bottom: 100%; left: 0;

.inner-footer
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: var(--max-width);
  +mobile()
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;

.logo
  width: 12em;

</style>

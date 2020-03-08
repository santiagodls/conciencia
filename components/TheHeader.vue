<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import Headroom from 'headroom.js'

type NavLinks = {
  text: string
  href: string
}

@Component
export default class TheHeader extends Vue {
  @Ref('header') readonly $header!: HTMLElement

  links: NavLinks[] = [
    { text: 'Nuestros servicios', href: '#servicios' },
    { text: 'Sobre nosotros', href: '#nosotros' },
    { text: 'Contacto', href: '#contacto' }
  ]

  private _headroom?: Headroom

  mounted () {
    this._headroom = new Headroom(this.$header, {
      tolerance: 10
    })
    this._headroom.init()
  }
}
</script>

<template lang="pug">
header.header(ref="header"): .inner-header
  section.left-section
    img.logo(src="~@/static/logo.svg")
  section.right-section
    nav.nav-links
      a.nav-link(
        v-for="link in links"
        :href="link.href"
      ) {{ link.text }}

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';

.header
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
  width: 100%;
  height: var(--header-height);
  background: white;

.inner-header
  display: flex;
  justify-content space-between;
  align-items: center;
  padding: 1em 4em;
  width: 100%; height: 100%;
  max-width: var(--max-width);
  +mobile()
    padding: .75em 1.5em;

  section
    height: 100%;
    display: flex;
    align-items: center;

.nav-links
  display: flex;
  align-items: center;
  +mobile()
    display: none;

.nav-link
  text-decoration: none;
  color: $dark-text-primary;
  font-size: 1.1em;
  font-weight: 600;
  margin-left: 2em;
  &:active
    color: $paper-orange-500;

.logo
  height: 100%;

.headroom
  will-change: transform;
  transition: transform 400ms ease-out;
  &--pinned
    transform: translateY(0%);
  &--unpinned
    transform: translateY(-100%);

</style>

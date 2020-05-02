<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import Headroom from 'headroom.js'
import AppIcon from '@/components/AppIcon.vue'

type NavLink = {
  text: string
  href: string
}

type NavLinksMap = {
  [key: string]: NavLink[]
}

@Component({ components: { AppIcon } })
export default class TheHeader extends Vue {
  @Ref('header') readonly $header!: HTMLElement
  @Ref('logo') readonly $logo!: HTMLImageElement

  links: NavLinksMap = {
    index: [
      { text: 'Nuestros servicios', href: '#servicios' },
      { text: 'Sobre nosotros', href: '#nosotros' },
      { text: 'Contacto', href: '#contacto' }
    ],
    trabajo: [
      { text: 'Telemarketing', href: '#telemarketing' },
      { text: 'Face2Face', href: '#face2face' }
    ]
  }

  viewsWithHeroBackground = [
    'trabajo'
  ]

  linksAreActive = false
  private _headroom?: Headroom

  get routeLinks (): NavLink[] | undefined {
    return this.links[this.$route.name || '']
  }

  get isBlogEntry (): boolean {
    return this.$route.name === 'blog/entry'
  }

  mounted () {
    this._headroom = new Headroom(this.$header, {
      tolerance: 10,
      onTop: this._onHeadroomTop.bind(this),
      onNotTop: this._onHeadroomNotTop.bind(this)
    })
    this._headroom.init()
  }

  private _hideMenu () {
    this.linksAreActive = false
    document.body.classList.remove('no-scroll')
  }

  private _showMenu () {
    this.linksAreActive = true
    document.body.classList.add('no-scroll')
  }

  private _onMenuButtonClicked () {
    this._showMenu()
  }

  private _onCloseButtonClicked () {
    this._hideMenu()
  }

  private _onNavLinkClicked () {
    if (this.linksAreActive) {
      this._hideMenu()
    }
  }

  private _onHeadroomTop () {
    if (this.viewsWithHeroBackground.includes(this.$route.name || '')) {
      const logo = require('@/static/logo-intermediate.svg')
      if (this.$logo) this.$logo.src = logo
    }
  }

  private _onHeadroomNotTop () {
    if (this.viewsWithHeroBackground.includes(this.$route.name || '')) {
      const logo = require('@/static/logo.svg')
      if (this.$logo) this.$logo.src = logo
    }
  }
}
</script>

<template lang="pug">
header.header(ref="header"): .inner-header
  section.left-section
    img.logo(ref='logo' src="~@/static/logo.svg")
  section.right-section(v-if='isBlogEntry')
    nav.nav-links
      nuxt-link.nav-link(to='/blog')
        AppIcon(icon='arrowLeft') Blog
  section.right-section(v-else-if='routeLinks')
    nav.nav-links(:class="{ active: linksAreActive }")
      a.nav-link(
        v-for="link in routeLinks"
        :href="link.href"
        @click="_onNavLinkClicked"
      ) {{ link.text }}
      svg.close-button(viewBox="0 0 24 24" @click="_onCloseButtonClicked")
        path(d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")
    svg.menu-button(viewBox="0 0 24 24" @click="_onMenuButtonClicked")
      path(d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z")

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
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    animation: menu-animation .5s ease-out forwards;
    opacity: 0;
    &:not(.active)
      display: none;

.nav-link
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  margin-left: 2em;
  color: $dark-text-primary;
  &:active
    color: $paper-orange-500;
  +mobile()
    font-size: 2em;
    margin: .5em 0;
  .icon
    color: inherit;

.close-button
  display: none;
  width: 32px; height: 32px;
  +mobile()
    display: block;
    position: absolute;
    top: 1.25em; right: 1.5em;

.menu-button
  display: none;
  width: 32px; height: 32px;
  fill: $dark-text-secondary;
  &:hover
    fill: $dark-text-primary;
  +mobile()
    display: block;

.logo
  height: 100%;

.headroom
  will-change: transform;
  background: transparent;
  transition: transform 400ms ease-out, background 200ms linear;
  &--not-top
    background: white;
  &--pinned
    transform: translateY(0%);
  &--unpinned
    transform: translateY(-100%);

@keyframes menu-animation
  from
    opacity: 0;
  to
    opacity: 1;

</style>

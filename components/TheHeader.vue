<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type NavLinks = {
  text: string
  href: string
}

@Component
export default class TheHeader extends Vue {
  links: NavLinks[] = [
    { text: 'Nuestros servicios', href: '#servicios' },
    { text: 'Sobre nosotros', href: '#nosotros' },
    { text: 'Contacto', href: '#contacto' }
  ]
}
</script>

<template lang="pug">
header.header
  .left-section
    img.logo(src="~@/static/logo.svg")
  .right-section
    nav.nav-links
      a.nav-link(
        v-for="link in links"
        :href="link.href"
      ) {{ link.text }}
</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';

.header
  display: flex;
  justify-content space-between;
  align-items: center;
  padding: 2em 4em;

.nav-links
  display: flex;
  align-items: center;

.nav-link
  text-decoration: none;
  color: $dark-text-secondary;
  font-size: 1.1em;
  margin-left: 2em;
  &:active
    color: $dark-text-primary;

.logo
  width: 14em;
</style>
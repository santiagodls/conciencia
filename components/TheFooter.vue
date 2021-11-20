<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppIcon from '@/components/AppIcon.vue'

@Component({ components: { AppIcon } })
export default class TheFooter extends Vue {
  links: NavLink[] = [
    // { text: 'Trabaja con nosotros', href: '/trabajo' }
    // { text: 'Nuestro blog', href: '/blog' }
  ]
}
</script>

<template lang="pug">
footer.footer
  .inner-footer
    .left-section
      .social
        AppIcon(size='32' icon='twitter')
        AppIcon(size='32' icon='youtube')
        AppIcon(size='32' icon='facebook')
      .contact
        AppIcon.email(
          icon='email'
          no-pointer
          no-hover
        ): span.email-text info@concienciafundraising.es
      nav.nav-list(v-for='link in links')
        nuxt-link.nav-link(:to='link.href') {{ link.text }}

    .right-section
      nuxt-link(to='/')
        img.logo(src='@/static/logo.svg')

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme'
@import '~@/assets/mixins';

$footer-margin = 16em;

.footer
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: $footer-margin;
  background: $app-grey;

  &::before
    content: '';
    width: 0; height: 0;
    border-style: solid;
    border-width: 'calc(%s / 2) 0 0 100vw' % $footer-margin;
    border-color: transparent transparent transparent $app-grey;
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

.social
  display: flex;
  +mobile()
    justify-content: flex-end;

.contact > *
  +mobile()
    flex-direction: row-reverse;

.email-text
  margin: 0 0 0 .25em;
  +mobile()
    margin: 0 .25em 0 0;

.nav-list
  +mobile()
    text-align: right;

.nav-link
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  color: $dark-text-primary;

</style>

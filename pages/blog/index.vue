<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Api, { ApiResponse } from '@/helpers/api'

interface ListPagination {
  previousPage: boolean
  currentPage: number
  nextPage: boolean
}

@Component
export default class Blog extends Vue {
  data: ApiResponse | null = null

  get pagination (): ListPagination {
    /* eslint-disable camelcase */
    return {
      previousPage: !!this.data?.prev_page,
      currentPage: this.data?.page || 1,
      nextPage: !!this.data?.next_page
    }
    /* eslint-enable camelcase */
  }

  created () {
    this.fetchEntries()
  }

  async fetchEntries (page = 1) {
    this.data = await Api.getBlogEntries({ page })
  }

  private _onPreviousButtonClicked () {
    this.fetchEntries(this.pagination.currentPage - 1)
  }

  private _onNextButtonClicked () {
    this.fetchEntries(this.pagination.currentPage + 1)
  }
}
</script>

<template lang="pug">
main
  section.hero-section
    h1.title Nuestro Blog
    h2.subtitle Un pequeño espacio para las ideas que hay que compartir, para las historias que creemos que hay que contar
  section.list-section
    nav.list-entries(v-if='data')
      nuxt-link.list-entry(
        v-for='entry, index of data.results'
        :to='`/blog/${entry.uid}`'
        :key='index'
      )
        h3.list-entry-title {{ entry.data.title[0].text }}
    footer.list-footer
      .left-section
        button.footer-button(
          v-if='pagination.previousPage'
          @click='_onPreviousButtonClicked'
        ) Previous
      .right-section
        button.footer-button(
          v-if='pagination.nextPage'
          @click='_onNextButtonClicked'
        ) Next

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';
@import '~@/assets/patterns';

.hero-section
  position: relative;

  &::before
    content: '';
    width: 24em; height: 15em;
    position: absolute;
    top: 0em; right: 15em;
    tic-tac-toe();
    z-index: -4;

  &::after
    content: '';
    width: 30em; height: 30em;
    position: absolute;
    top: -2em; right: -1em;
    background: $app-yellow;
    border-radius: 50%;
    z-index: -3;

  .title
    font-size: 5em;
    &::before
      content: 'blog';
      line-height: .4;
      letter-spacing: -.05em;
      font-size: 9em;
      position: absolute;
      top: 0; left: 0;
      color: lighten($app-grey, 12);
      z-index: -1;

  .subtitle
    font-size: 2em;
    font-weight: normal;

.list
  &-entries
    padding: 0;
    list-style: none;

  &-entry
    text-decoration: none;

  &-entry-title
    font-size: 1.5em;

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'
import Api, { ApiSearch, Entry } from '@/helpers/api'
import AppIcon from '@/components/AppIcon.vue'

interface ListPagination {
  previousPage: boolean
  currentPage: number
  nextPage: boolean
}

@Component({ components: { AppIcon } })
export default class Blog extends Vue {
  data: ApiSearch | null = null

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
    this.fetchEntries(Number(this.$route.query.p))
  }

  async fetchEntries (page = 1) {
    this.data = await Api.getBlogEntries({ page })
  }

  private _getEntryDay (entry: Entry): string {
    if (!entry || !entry.first_publication_date) return ''
    const date = parseISO(entry.first_publication_date)
    return format(date, 'dd')
  }

  private _getEntryMonth (entry: Entry): string {
    if (!entry || !entry.first_publication_date) return ''
    const date = parseISO(entry.first_publication_date)
    return format(date, 'MMMM', { locale: es })
  }

  private _getEntryText (entry: Entry): string {
    return entry.data.content.map((datum: any) => datum.text).join('\n')
  }

  private _onPreviousButtonClicked () {
    const previousPage = this.pagination.currentPage - 1
    this.$router.push({ query: { p: previousPage.toString() } })
    this.fetchEntries(previousPage)
    window.scrollTo(0, 0)
  }

  private _onNextButtonClicked () {
    const nextPage = this.pagination.currentPage + 1
    this.$router.push({ query: { p: nextPage.toString() } })
    this.fetchEntries(nextPage)
    window.scrollTo(0, 0)
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
      .list-entry(
        v-for='entry, index of data.results'
        :key='index'
      )
        .list-entry-left
          span.list-entry-day {{ _getEntryDay(entry) }}
          span.list-entry-month {{ _getEntryMonth(entry) }}
        .list-entry-right
          nuxt-link.list-entry-title(:to='`/blog/${entry.uid}`')
            | {{ entry.data.title[0].text }}
          p.list-entry-content
            | {{ _getEntryText(entry) }}
    footer.list-footer(v-if='pagination.previousPage || pagination.nextPage')
      AppIcon.list-footer-button(
        v-if='pagination.previousPage'
        icon='arrowLeft'
        @click.native='_onPreviousButtonClicked'
      ) Anterior
      AppIcon.list-footer-button(
        v-if='pagination.nextPage'
        icon='arrowRight'
        @click.native='_onNextButtonClicked'
        reverse
      ) Siguiente

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';
@import '~@/assets/patterns';

.hero-section
  position: relative;
  +mobile()
    font-size: .7em;
    padding: 6em 2em;

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
    font-family: 'Roboto Condensed';
    font-size: 5em;
    &::before
      font-family: 'Source Sans Pro';
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
  &-section
    +mobile()
      padding: 4em 1.5em;

  &-entries
    padding: 0;
    list-style: none;

  &-entry
    display: flex;
    +mobile()
      flex-direction: column;

    &:not(:last-child)
      margin-bottom: 6em;

  &-entry-left
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: $app-grey;
    flex-shrink: 0;
    margin-right: 2em;
    +mobile()
      flex-direction: row;

  &-entry-day
    font-size: 8em;
    line-height: .75;
    margin-top: .05em;
    +mobile()
      font-size: 1.2em;
      line-height: 1.5;

  &-entry-month
    font-size: 2.5em;
    line-height: .75em;
    +mobile()
      font-size: 1.2em;
      line-height: 1.5;

  &-entry-day,
  &-entry-month,
  &-entry-title
    font-family: 'Roboto Condensed';

  &-entry-title
    text-decoration: none;
    color: $dark-text-primary;
    font-size: 2em;
    margin-top: 1em;
    &:hover
      color: black;

  &-entry-content
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    max-height: 6.5em;

  &-footer
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6em;

  &-footer-button
    font-size: 2em;

</style>

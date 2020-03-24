<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'
import Api, { Entry } from '@/helpers/api'
import Dom from '@/helpers/dom'

@Component({ mixins: [Dom] })
export default class BlogEntry extends Vue {
  entry: Entry | null = null

  created () {
    this.fetchEntry()
  }

  async fetchEntry () {
    this.entry = await Api.getBlogEntry(this.$route.params.entry)
  }

  private _getEntryDate (entry: Entry): string {
    if (!entry) return ''
    const date = parseISO(entry.first_publication_date as string)
    return format(date, 'dd \'de\' MMMM \'de\' yyyy', { locale: es })
  }
}
</script>

<template lang="pug">
main
  section
    section.hero-section(v-if='entry')
      h1.hero-section-title(v-if='entry.data.title')
        | {{ entry.data.title[0].text }}
      h3.hero-section-subtitle(v-if='entry.data.subtitle')
        | {{ entry.data.subtitle[0].text }}
      p.hero-section-date(v-if='entry.first_publication_date')
        | {{ _getEntryDate(entry) }}
      img.hero-section-img(
        v-if='entry.data.hero_image'
        :alt='entry.data.hero_image.alt'
        :src='entry.data.hero_image.url'
      )

    section.content-section(
      v-if='entry'
      v-html='richText(entry.data && entry.data.content)'
    )

</template>

<style lang="stylus" scoped>
@import '~@/assets/theme';
@import '~@/assets/mixins';

.hero-section
  text-align: center;
  color: $dark-text-primary;

  &-title
    font-family: 'Roboto Condensed';
    font-size: 4em;

  &-subtitle
    font-weight: normal;
    font-size: 2em;

  &-date
    margin-top: .5em;
    color: $paper-grey-500;

  &-img
    width: 100%;
    margin: 2em 0;

.content-section
  /deep/ p
    margin-bottom: 1em !important;

  /deep/ a
    text-decoration: none;
    font-weight: bold;
    color: $paper-orange-500;
    &:hover
      color: $paper-orange-600;

</style>

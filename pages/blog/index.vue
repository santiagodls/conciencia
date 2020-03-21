<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Api, { ApiResponse } from '@/helpers/api'

@Component({ layout: 'blog' })
export default class Blog extends Vue {
  data: ApiResponse | {} = {}

  created () {
    this.fetchEntries()
  }

  async fetchEntries () {
    this.data = await Api.getBlogEntries({ page: 1 })
  }
}
</script>

<template lang="pug">
.blog
  h1 Blog list
  ul.blog-entries
    li(v-for='entry of data.results')
      a(:href='`/blog/${entry.uid}`') {{ entry.data.title[0].text }}

</template>

<style lang="stylus" scoped>

</style>

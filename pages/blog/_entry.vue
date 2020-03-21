<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Api, { ApiResponse } from '@/helpers/api'
import Dom from '@/helpers/dom'

@Component({ layout: 'blog', mixins: [Dom] })
export default class BlogEntry extends Vue {
  entry: ApiResponse | {} = {}

  created () {
    this.fetchEntry()
  }

  async fetchEntry () {
    this.entry = await Api.getBlogEntry(this.$route.params.entry)
  }
}
</script>

<template lang="pug">
.blog
  h1 entry
  p(v-html='richText(entry.data && entry.data.content)')

</template>

<style lang="stylus" scoped>

</style>

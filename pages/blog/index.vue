<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Pagination } from 'element-ui'
import Api, { ApiResponse } from '@/helpers/api'

interface ListPagination {
  totalItemsCount: number
  itemsPerPage: number
  currentPage: number
}

@Component({
  components: { Pagination },
  layout: 'blog'
})
export default class Blog extends Vue {
  data: ApiResponse | null = null

  get pagination (): ListPagination {
    /* eslint-disable camelcase */
    return {
      totalItemsCount: this.data?.total_results_size || 1,
      itemsPerPage: this.data?.results_per_page || 1,
      currentPage: this.data?.page || 1
    }
    /* eslint-enable camelcase */
  }

  created () {
    this.fetchEntries()
  }

  async fetchEntries (page = 1) {
    this.data = await Api.getBlogEntries({ page })
  }

  private _onCurrentPageChanged (newPage: number) {
    this.fetchEntries(newPage)
  }
}
</script>

<template lang="pug">
.blog
  h1 Blog list
  .list-wrapper(v-if='data')
    ul.blog-entries
      li(v-for='entry of data.results')
        a(:href='`/blog/${entry.uid}`') {{ entry.data.title[0].text }}
    Pagination(
      layout='prev,pager,next'
      :total='pagination.totalItemsCount'
      :current-page='pagination.currentPage'
      :page-size='pagination.itemsPerPage'
      @current-change='_onCurrentPageChanged'
    )

</template>

<style lang="stylus" scoped>

</style>

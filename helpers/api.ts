import Prismic from 'prismic-javascript'
import ApiSearchResponse from 'prismic-javascript/d.ts/ApiSearchResponse'
import { QueryOptions } from 'prismic-javascript/d.ts/ResolvedApi'
import PrismicConfig from '@/prismic.config'

export type ApiResponse = ApiSearchResponse;

export default class Api {
  /**
   * Get list of blog entries
   */
  static async getBlogEntries (options: QueryOptions): Promise<ApiResponse> {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
    const data = await api.query(
      Prismic.Predicates.at('document.type', 'blog_entry'),
      options
    )
    return data
  }

  /**
   * Get blog entry
   */
  static async getBlogEntry (uid: string): Promise<ApiResponse['results'][0]> {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
    const data = await api.query(
      Prismic.Predicates.at('my.blog_entry.uid', uid), {}
    )
    return data.results?.[0] || {}
  }
}

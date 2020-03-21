import { Vue, Component } from 'vue-property-decorator'
import PrismicDom from 'prismic-dom'

@Component
export default class Dom extends Vue {
  richText (data: any) {
    if (data) {
      return PrismicDom.RichText.asHtml(data)
    }
  }
}

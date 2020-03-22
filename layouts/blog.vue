<template lang="pug">
  nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/index.css'

@Component
export default class BlogLayout extends Vue {

}
</script>

<style lang="stylus">
@import '~@/assets/theme';
@import '~@/assets/mixins';
@import '~@/assets/reset';

</style>

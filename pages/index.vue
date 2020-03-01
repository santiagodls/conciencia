<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader.vue'

@Component({ components: { TheHeader } })
export default class Index extends Vue {

}
</script>

<template lang="pug">
TheHeader
</template>

<style lang="stylus" scoped>

</style>

<template lang="html">
    <h1 class="red"><span v-html="PrismicDom.RichText.asHtml(articolo.data.titolo)"></span></h1>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['articolo'],
    data: function () {
        return {
            PrismicDom: PrismicDom
        }
    }
}
</script>

<style lang="scss">
</style>

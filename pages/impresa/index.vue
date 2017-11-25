<template lang="html">
    <div>
        <h1 v-for="articolo in articoli"  class="red"><span v-html="PrismicDom.RichText.asHtml(articolo.data.titolo)"></span></h1>
    </div>

</template>

<script>

import PrismicDom from 'prismic-dom'

export default {
    middleware: 'getArticoliByCategoria',
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoli'],
            PrismicDom: PrismicDom
        }
    }
}
</script>

<style lang="scss">
</style>

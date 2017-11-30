<template lang="html">
    <div class="destra">
        <div class="titolo">Novità</div>
        <article class="" v-for="articolo in articoli" v-bind:articolo="articolo">
            <div class="title is-6" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
            <div v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />
            <hr>
        </article>
    </div>



</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getNews'],
            PrismicDom: PrismicDom
        }
    }
}
</script>

<style lang="scss">
.destra {
    padding: 0.5rem;
    font-size: 85%;
    .title {
        margin-bottom: 0.5rem;
    }
    .titolo {
        background-color: #2b5273;
        border: 1px solid;
        color: #ffffff;
        padding: 0.5rem;
        margin-bottom: 0.3rem;
    }
    article {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
}
</style>

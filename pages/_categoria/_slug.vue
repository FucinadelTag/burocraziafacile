<template lang="html">
    <article class="content">
        <header>
            <h1 class="title is-3" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h1>
            <dataArticolo v-bind:articolo="articolo"/>
        </header>
        <img v-bind:src="articolo.data.immagine_principale.url" />
        <section class="abstract" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />

            <section v-for="slice in articolo.data.body" :key="articolo.id">
                <h2 class="title is-5" v-if="slice.primary.titolo[0].text !== ''" v-html="PrismicDom.RichText.asText(slice.primary.titolo)"/>

                <div v-if="slice.primary.titolo[0].testo !== ''" v-html="PrismicDom.RichText.asHtml(slice.primary.testo)"/>

            </section>

    </article>

</template>

<script>
import PrismicDom from 'prismic-dom'
import dataArticolo from '~/components/dataArticolo.vue'

export default {
    middleware: 'getArticolo',
    data: function () {
        return {
            articolo: this.$store.getters['articoli/getArticolo'],
            PrismicDom: PrismicDom,
        }

    },
    components: {
        dataArticolo
    }
}
</script>

<style lang="scss">
.data {
    font-size: 90%;
}

.abstract {
    font-style: italic;
}

</style>

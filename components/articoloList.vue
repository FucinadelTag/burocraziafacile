<template lang="html">
    <article class="articoloList">
        <a v-bind:href="linkArticolo">
            <div class="columns">
                <div class="column">
                    <h2 class="title is-2" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h2>
                    <dataArticolo v-bind:articolo="articolo"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-two-quarters">
                    <img v-bind:src="articolo.data.immagine_principale[0].immagine.url" v-bind:title="articolo.data.immagine_principale[0].alt" v-bind:alt="articolo.data.immagine_principale[0].alt" />
                </div>
                <div class="column is-two-quarters" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />
            </div>
        </a>

    </article>



</template>

<script>
import dataArticolo from '~/components/dataArticolo.vue'
import PrismicDom from 'prismic-dom'

export default {
    props: ['articolo'],
    computed: {
        // a computed getter
        linkArticolo: function () {
            let categoria = this.articolo.data.categoria.uid;

            return (categoria + "/" + this.articolo.uid);
        }
    },
    data: function () {
        return {
            PrismicDom: PrismicDom
        }
    },
    components: {
        dataArticolo
    }
}
</script>

<style lang="scss">
    .articoloList a {
        color: inherit;
    }
    .articoloList {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid;
        border-bottom-color: $grey-ligh;
    }
</style>

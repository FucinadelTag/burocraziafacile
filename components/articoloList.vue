<template lang="html">
    <div class="articoloList">
        <a v-bind:href="linkArticolo">
            <div class="columns">
                <div class="column">
                    <h2 class="title" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h2>
                    <span class="data">{{dataArticolo}} | Autore: Redazione</span>
                </div>
            </div>
            <div class="columns">
                <div class="column is-two-quarters">
                    <img v-bind:src="articolo.data.immagine_principale.url" />
                </div>
                <div class="column is-two-quarters" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />
            </div>
        </a>

    </div>



</template>

<script>
import PrismicDom from 'prismic-dom'
import Moment from 'moment'

export default {
    props: ['articolo'],
    computed: {
        // a computed getter
        dataArticolo: function () {
            // `this` points to the vm instance
            return Moment(this.articolo.last_publication_date).format('DD MMMM YYYY');
        },
        linkArticolo: function () {
            let categoria = this.articolo.data.categoria.uid;

            return (categoria + "/" + this.articolo.uid);
        }
    },
    data: function () {
        return {
            PrismicDom: PrismicDom
        }
    }
}
</script>

<style lang="scss">
    a {
        color: inherit;
    }
    .articoloList {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid;
        border-bottom-color: $grey-ligh;

        .data {
            font-size: 85%;
            font-style: italic;
            margin-top: -20px;
        }
    }

    p.small {
        font-size: 100%;
    }
</style>

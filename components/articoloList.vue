<template lang="html">
    <div class="articoloList">
        <div class="columns">
            <div class="column">
                <h2 class="title"><span v-html="PrismicDom.RichText.asHtml(articolo.data.titolo)"></span></h2>
                <span>{{dataArticolo}}</span>
            </div>
        </div>
        <div class="columns">
            <div class="column is-two-quarters">
                <img v-bind:src="articolo.data.immagine_principale.url" />
            </div>
            <div class="column is-two-quarters">
                <p class="small" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)"></p>
            </div>
        </div>
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
          return Moment(this.articolo.last_publication_date).format('DD/MM/YYYY');
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
    .articoloList {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid;
        border-bottom-color: $grey-ligh;
    }

    p.small {
        font-size: 100%;
    }
</style>

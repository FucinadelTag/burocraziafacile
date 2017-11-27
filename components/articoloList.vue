<template lang="html">
    <div class="articoloList">
        <div class="columns">
            <div class="column">
                <h2 class="title"><span v-html="PrismicDom.RichText.asHtml(articolo.data.titolo)"></span></h2>
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

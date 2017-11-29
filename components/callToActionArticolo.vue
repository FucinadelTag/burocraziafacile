<template lang="html">
    <div class="box callToAction">
        <h3 class="subtitle is-3" v-if="paragrafo.primary.titolo[0].text !== ''" v-html="PrismicDom.RichText.asText(paragrafo.primary.titolo)"/>
        <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.descrizione)"/>
        <hr>
        <div v-for="action in paragrafo.items" v-bind:action="action" :key="paragrafo.id">
            <div class="columns is-multiline">
                <div class="column">
                    <buttonCallToAction  v-bind:callToAction="action"/>
                </div>

            </div>
            <div class="columns is-multiline is-centered">
                <div class="column">
                    <span v-html="PrismicDom.RichText.asHtml(action.descrizione)"/>
                </div>
            </div>
            <hr>
        </div>

    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import buttonCallToAction from '~/components/buttonCallToAction.vue'

export default {
    props: ['paragrafo'],
    computed: {
        // a computed getter
        getLinkWithTag: function (action) {
            let linkUrl = PrismicDom.Link.url(action.link);
            return linkUrl;
        }
    },
    data: function () {
        return {
            PrismicDom: PrismicDom,
        }
    },
    components: {
        buttonCallToAction,
    }
}
</script>

<style lang="scss">
.callToAction {
    background-color: #ffffff;
}
.button {
    background-color: #ea6728;
    color: #ffffff;
    text-transform: uppercase;

    &:hover {
        color: #ffffff;
        background-color: #f87a13;
    }

    &:visited {
        color: #ffffff;
        background-color: #f87a13;
    }
}
</style>

<template lang="html">
    <div class="callToAction has-text-centered">
        <a class="button is-hidden-tablet" v-bind:href="linkWithTag" target="_blank">{{callToAction.data.testo_mobile}}</a>
        <a class="button is-hidden-mobile" v-bind:href="linkWithTag" target="_blank">{{callToAction.data.testo_bottone}}</a>
        <span class="descrizione" v-html="descrizioneHtml"/>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'

export default {
    props: ['callToAction'],
    data: function () {
        return {
            articolo: this.$store.getters['articoli/getArticolo'],
            PrismicDom: PrismicDom,
        }
    },
    computed: {
        // a computed getter
        descrizioneHtml: function () {
            return PrismicDom.RichText.asHtml(this.callToAction.data.descrizione);
        },
        linkWithTag: function () {
            let linkUrl = PrismicDom.Link.url(this.callToAction.data.link);
            let uid = this.articolo.uid;

            let taggedLink = linkUrl + '/?utm_source=burocraziafacile&utm_medium=articolo&utm_campaign=' + uid;

            return taggedLink;
        },
    }
}
</script>

<style lang="scss">

.callToAction {
    padding: 1rem;

    .descrizione {
        font-style: italic;
        color: $orangePratiche;
        font-weight: bold
    }
    .button {
        background-color: #ea6728;
        color: #ffffff;
        font-size: 110%;
        font-weight: bold;
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

}


</style>

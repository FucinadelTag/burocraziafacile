<template lang="html">
    <div class="callToAction has-text-centered">
        <a class="button is-hidden-tablet" v-bind:href="linkWithTag" v-on:click="articleTrack(callToAction.uid)" target="_blank">{{callToAction.data.testo_mobile}}</a>
        <a class="button is-hidden-mobile" v-bind:href="linkWithTag" v-on:click="articleTrack(callToAction.uid)" target="_blank">{{callToAction.data.testo_bottone}}</a>
        <span class="descrizione" v-html="descrizioneHtml"/>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'
import {linkWithTag} from '~/tools/taggedLink.js'

import _ from 'lodash'

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
            let utmQuery = this.$cookies.get('utmQuery');
            let taggedLink = linkWithTag (linkUrl, utmQuery, 'articolo', uid);

            return taggedLink;
        },
    },
    methods: {
        articleTrack: function (uid) {
            fbq('trackCustom', 'ArticleAction', {
                button_uid: uid,
                articolo_uid: this.articolo.uid
            });

            ga('send', {
                hitType: 'event',
                eventCategory: 'ArticleAction',
                eventAction: uid,
                eventLabel: this.articolo.uid
            });

        }
    }

}
</script>

<style lang="scss">


</style>

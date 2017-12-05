<template lang="html">
    <div class="callToAction has-text-centered">
        <a class="button is-hidden-tablet" v-bind:href="linkWithTag" target="_blank">{{contenutoTitoloMobile}}</a>
        <a class="button is-hidden-mobile" v-bind:href="linkWithTag" target="_blank">{{contenutoTitolo}}</a>
        <span v-html="contenutoDescrizione"/>
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
            contenuto: null,
            contenutoTitoloMobile: 'Loading...',
            contenutoTitolo: 'Loading...',
            linkWithTag: null,
            contenutoDescrizione: null
        }
    },
    created() {
        this.getContenuto()
    },
    methods: {
        getContenuto() {
            getDocumentById (this.callToAction.id)
            .then((contenuto)=>{
                this.contenuto = contenuto;
                this.contenutoTitoloMobile = contenuto.data.testo_mobile;
                this.contenutoTitolo = contenuto.data.testo_bottone;
                this.contenutoDescrizione = PrismicDom.RichText.asHtml(contenuto.data.descrizione);

                this.getLinkWithTag();
            });
        },
        getLinkWithTag () {
            let linkUrl = PrismicDom.Link.url(this.contenuto.data.link);
            let uid = this.articolo.uid;



            let taggedLink = linkUrl + '/?utm_source=burocraziafacile&utm_medium=articolo&utm_campaign=' + uid;

            console.log (linkUrl);

            this.linkWithTag = taggedLink;

            //return taggedLink;
        },
    },
}
</script>

<style lang="scss">

.callToAction {
    .button {
        background-color: #ea6728;
        color: #ffffff;
        text-transform: uppercase;
        margin-top: 2rem;

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

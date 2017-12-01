<template lang="html">
    <div class="callToAction">
        <a class="button is-hidden-tablet" v-bind:href="getLinkWithTag" target="_blank"  v-html="callToAction.testo_mobile"></a>
        <a class="button is-hidden-mobile" v-bind:href="getLinkWithTag" target="_blank"  v-html="callToAction.testo_bottone"></a>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['callToAction'],
    data: function () {
        return {
            articolo: this.$store.getters['articoli/getArticolo']
        }
    },
    computed: {
        // a computed getter
        getLinkWithTag: function () {
            let linkUrl = PrismicDom.Link.url(this.callToAction.link);
            let uid = this.articolo.uid;

            let taggedLink = linkUrl + '/?utm_source=burocraziafacile&utm_medium=articolo&utm_campaign=' + uid;

            return taggedLink;
        }
    },
}
</script>

<style lang="scss">

.callToAction {
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

}


</style>

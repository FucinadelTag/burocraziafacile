<template lang="html">
    <div>
        <a class="button is-hidden-tablet" v-bind:href="getLinkWithTag" target="_blank"  v-html="callToAction.testo_mobile"></a>
        <a class="button is-hidden-mobile" v-bind:href="getLinkWithTag" target="_blank"  v-html="callToAction.testo_bottone"></a>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['callToAction'],
    computed: {
        // a computed getter
        getLinkWithTag: function () {
            let linkUrl = PrismicDom.Link.url(this.callToAction.link);

            let taggedLink = linkUrl + '/?utm_source=burocraziafacile&utm_medium=articolo';

            return taggedLink;
        }
    },
}
</script>

<style lang="scss">
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

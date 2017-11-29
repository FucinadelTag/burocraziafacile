<template lang="html">
    <article class="content">
        <header>
            <h1 class="title is-2" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h1>
            <dataArticolo v-bind:articolo="articolo"/>
        </header>
        <img v-bind:src="articolo.data.immagine_principale.url" />
        <section class="abstract section" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />

            <section class="section" v-for="slice in articolo.data.body" :key="articolo.id">

                <paragrafoArticolo v-if="slice.slice_type == 'paragrafo'"  v-bind:paragrafo="slice"/>

                <callToActionArticolo v-if="slice.slice_type == 'call_to_action'"  v-bind:paragrafo="slice"/>

            </section>

    </article>

</template>

<script>
import PrismicDom from 'prismic-dom'
import dataArticolo from '~/components/dataArticolo.vue'
import paragrafoArticolo from '~/components/paragrafoArticolo.vue'
import callToActionArticolo from '~/components/callToActionArticolo.vue'

export default {
    middleware: 'getArticolo',
    data: function () {
        return {
            articolo: this.$store.getters['articoli/getArticolo'],
            PrismicDom: PrismicDom,
        }

    },
    components: {
        dataArticolo,
        paragrafoArticolo,
        callToActionArticolo,
    }
}
</script>

<style lang="scss">
.section {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;
}

@media screen and (max-width: 768px) {

	.section {
        padding-left: 0rem;
        padding-right: 0rem;
	}

}

.abstract {
    font-style: italic;
}

</style>

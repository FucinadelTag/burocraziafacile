<template lang="html">
    <div>
        <h2 class="subtitle is-3" v-if="paragrafo.primary.titolo[0].text !== ''" v-html="PrismicDom.RichText.asText(paragrafo.primary.titolo)"/>


        <div v-if="paragrafo.primary.posizione_immagine == 'Destra'">
            <div class="columns">
                <div class="column">
                    <div v-if="paragrafo.primary.testo[0].text !== ''" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
                <div class="column">
                    <img v-bind:src="paragrafo.primary.immagine.Quadrata.url" />
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sinistra'">
            <div class="columns">
                <div class="column">
                    <img v-bind:src="paragrafo.primary.immagine.Quadrata.url" />
                </div>
                <div class="column">
                    <div v-if="paragrafo.primary.testo[0].text !== ''" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sopra'">
            <img v-bind:src="paragrafo.primary.immagine.url" />
            <div v-if="paragrafo.primary.testo[0].text !== ''" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'No_Immagine'">
            <div v-if="paragrafo.primary.testo[0].text !== ''" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>


        <div v-if="paragrafo.primary.posizione_immagine == 'Sotto'">
            <div v-if="paragrafo.primary.testo[0].text !== ''" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
            <img v-bind:src="paragrafo.primary.immagine.url" />
        </div>

    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['paragrafo'],
    data: function () {
        return {
            PrismicDom: PrismicDom
        }
    },
}
</script>

<style lang="scss">
</style>

<template lang="html">
    <div class="paragrafoArticolo">
        <h2 class="subtitle is-3" v-if="paragrafo.primary.titolo !=''" v-html="PrismicDom.RichText.asText(paragrafo.primary.titolo)"/>


        <div v-if="paragrafo.primary.posizione_immagine == 'Destra'">
            <div class="columns">
                <div class="column">
                    <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
                <div class="column">
                    <img v-bind:src="paragrafo.primary.immagine.Quadrata.url" v-bind:alt="paragrafo.primary.alt_immagine" />
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sinistra'">
            <div class="columns">
                <div class="column">
                    <img v-bind:src="paragrafo.primary.immagine.Quadrata.url" v-bind:alt="paragrafo.primary.alt_immagine" />
                </div>
                <div class="column">
                    <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
                </div>
            </div>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'Sopra'">
            <img v-bind:src="paragrafo.primary.immagine.url" v-bind:alt="paragrafo.primary.alt_immagine" />
            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>

        <div v-if="paragrafo.primary.posizione_immagine == 'No_Immagine'">
            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
        </div>


        <div v-if="paragrafo.primary.posizione_immagine == 'Sotto'">
            <div v-html="PrismicDom.RichText.asHtml(paragrafo.primary.testo)"/>
            <img v-bind:src="paragrafo.primary.immagine.url" v-bind:alt="paragrafo.primary.alt_immagine" />
        </div>

        <div class="has-text-centered" v-if="callToActionsParagrafo" v-for="action in callToActionsParagrafo" :key="action.id">
            <buttonCallToAction  v-bind:callToAction="action" />
        </div>

    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import buttonCallToAction from '~/components/buttonCallToAction.vue'

export default {
    props: ['paragrafo', 'indice'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            callToActions: this.$store.getters['articoli/getArticoliCallToActions'],
        }
    },
    computed: {
        // a computed getter
        callToActionsParagrafo: function () {
            let callToActionsArray = this.callToActions[this.indice];
            if (callToActionsArray[0] !== null){
                return this.callToActions[this.indice];
            } else {
                return false
            }



        }
    },
    components: {
        buttonCallToAction,
    }
}
</script>

<style lang="scss">

.paragrafoArticolo {
    img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        //padding: 0.4rem;
        //border: 1px solid;
        //border-color: $grey-ligh;
    }
}

</style>

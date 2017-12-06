<template lang="html">
    <div class="box callToAction has-text-centered">
        <div class="subtitle is-4" v-if="paragrafo.primary.titolo[0].text !== ''" v-html="PrismicDom.RichText.asText(paragrafo.primary.titolo)"/>
        <div class="subtitlem is-6" v-html="PrismicDom.RichText.asHtml(paragrafo.primary.descrizione)"/>
        <hr>
        <div v-for="actionArray in callToActions" v-bind:action="actionArray">
            <div v-for="action in actionArray" class="columns is-multiline">
                <div v-if="action !== null" class="column has-text-centered">
                    <buttonCallToAction  v-bind:callToAction="action"/>
                    <hr>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import buttonCallToAction from '~/components/buttonCallToAction.vue'

export default {
    props: ['paragrafo'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
            callToActions: this.$store.getters['articoli/getArticoliCallToActions'],
        }
    },
    components: {
        buttonCallToAction,
    }
}
</script>

<style lang="scss">

</style>

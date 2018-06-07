<template lang="html">
    <a itemprop="url" v-bind:href="'/' + articolo.data.categoria.uid + '/' + articolo.uid">
        <article class="boxArticolo">
            <div class="columns">
                <!-- <div class="column">
                    <h1 class="title is-6" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
                    <a class="linkMore" v-bind:href="'/' + articolo.data.categoria.uid + '/' + articolo.uid">Leggi Tutto</a>
                </div> -->
                <div class="column">
                    <figure class="" itemscope itemtype="https://schema.org/ImageObject">
                        <img itemprop="image" v-bind:src="articolo.data.immagine_principale[0].immagine.url" v-bind:alt="articolo.data.immagine_principale[0].alt" v-bind:title="articolo.data.immagine_principale[0].title" />
                    </figure>
                    <!-- <dataArticolo v-bind:articolo="articolo"/> -->
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div itemprop="title headline" class="title is-4" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
                </div>
            </div>

        </article>
    </a>

</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    props: ['articolo'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
        }

    },
}
</script>

<style lang="scss">

.boxArticolo {
    padding: 1rem;
    border-top-color: $orangePratiche;
    border-top-width: .2rem;
    border-top-style: solid;
}

</style>

<template lang="html">

        <div class="destra">
            <div class="titolo">Le nostre guide</div>
            <article class="" v-for="articolo in articoli" v-bind:articolo="articolo">
                <a v-bind:href="'/' + articolo.data.categoria.uid + '/' + articolo.uid">
                    <div class="columns is-gapless">
                        <div class="column">
                            <div class="title is-6" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
                            <!-- <p v-html="PrismicDom.RichText.asText(articolo.data.abstract)" /> -->
                            <p class="">
                                <span class="button is-light is-small">Leggi la guida</span>
                            </p>
                        </div>
                        <div class="column is-7">
                                <img v-bind:src="articolo.data.immagine_principale[0].immagine.url" v-bind:title="articolo.data.immagine_principale[0].alt" v-bind:alt="articolo.data.immagine_principale[0].alt" />
                        </div>

                    </div>
                </a>


                <hr>
            </article>
        </div>




</template>

<script>
import PrismicDom from 'prismic-dom'

export default {
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoliHome'],
            PrismicDom: PrismicDom
        }
    }
}
</script>

<style lang="scss">
.destra {
    padding: 0.5rem;
    font-size: 85%;
    .title {
        margin-bottom: 0.5rem;
    }
    .titolo {
        background-color: $grey-ligh;
        color: $grey;
        font-weight: 800;
        padding: 0.5rem;
        margin-bottom: 0.3rem;
    }
    article {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
    a {
        color: inherit;
    }
    .linkmore {
        margin-top: 10rem;
        font-style: italic;
    }
}
</style>

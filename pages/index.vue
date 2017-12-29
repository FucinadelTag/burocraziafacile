<template>
    <div class="home">
            <div class="principale" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                <a itemprop="url" v-bind:href="'/' + firstArticle.data.categoria.uid + '/' + firstArticle.uid">
                    <article class="box tile is-child">
                        <div class="columns">
                            <div class="colum">
                                <h1 itemprop="title headline" class="title is-2" v-html="PrismicDom.RichText.asText(firstArticle.data.titolo)"/>
                            </div>
                        </div>
                        <hr>
                        <div class="columns">
                            <div class="column is-one-third">
                                <p itemprop="description" v-html="PrismicDom.RichText.asText(firstArticle.data.abstract)"/>
                                <!-- <dataArticolo v-bind:articolo="firstArticle"/> -->
                            </div>
                            <div class="column">
                                <figure class="image" itemscope itemtype="https://schema.org/ImageObject">
                                  <img itemprop="image" v-bind:src="firstArticle.data.immagine_principale[0].immagine.url" v-bind:alt="firstArticle.data.immagine_principale[0].alt" v-bind:title="firstArticle.data.immagine_principale[0].title" />
                                </figure>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="columns is-multiline">
                <div v-for="articolo in altriArticoli" :key="articolo.id" class="column is-half" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
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
                                    <h2 itemprop="title headline" class="title is-4" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
                                </div>
                            </div>

                        </article>
                    </a>
                </div>
            </div>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import _ from 'lodash'
import dataArticolo from '~/components/dataArticolo.vue'

export default {
    middleware: 'getArticoliHome',
    computed: {
        // a computed getter
        firstArticle: function () {
            return this.articoli[0];
        },
        altriArticoli: function () {
            return _.drop (this.articoli, 1);
        }
    },
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoliHome'],
            PrismicDom: PrismicDom,
        }
    },
    components: {
        dataArticolo,
    },
}
</script>

<style lang="scss">
.home {
    padding: 1rem;
    a {
        color: inherit;
    }
    .box {
        border-top-color: $orangePratiche;
        border-top-width: .2rem;
        border-top-style: solid;
    }
    .boxArticolo {
        padding: 1rem;
        border-top-color: $orangePratiche;
        border-top-width: .2rem;
        border-top-style: solid;
    }

    .linkMore {
        font-style: italic;
    }
    .principale {
        margin-bottom: 1.5rem;
    }
}
</style>

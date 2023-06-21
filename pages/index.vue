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
                                <figure class="image">
                                  <img itemprop="image" v-bind:src="immagine_principale.url" v-bind:alt="immagine_principale.alt" v-bind:title="immagine_principale.title" />
                                </figure>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="columns is-multiline">
                <div v-for="articolo in altriArticoli" class="column is-half" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <easyListArticoli v-bind:articolo = "articolo"  v-bind:key = "articolo.id" />
                </div>
            </div>
    </div>

</template>

<script>
import PrismicDom from 'prismic-dom'
import _ from 'lodash'
import dataArticolo from '~/components/dataArticolo.vue'
import easyListArticoli from '~/components/easyListArticoli.vue'
import {getSobstituteImage} from '~/tools/images.js'

export default {
    middleware: 'getNews',
    computed: {
        // a computed getter
        firstArticle: function () {
            return this.articoli[0];
        },
        altriArticoli: function () {
            return _.drop (this.articoli, 1);
        },
		immagine_principale: function () {
			let immagineData = {
				url: this.articoli[0].data.immagine_principale[0].immagine.url,
				alt: this.articoli[0].data.immagine_principale[0].alt,
				title: this.articoli[0].data.immagine_principale[0].alt,
			}
			
			
			immagineData.url = getSobstituteImage (this.articoli[0]);
			
			
			return immagineData;
		},
    },
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getNews'],
            PrismicDom: PrismicDom,
        }
    },
    components: {
        dataArticolo,
        easyListArticoli
    },
}
</script>

<style lang="scss">
.home {
    padding: 0rem 1rem 1rem 1rem;
    a {
        color: inherit;
    }
    .box {
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

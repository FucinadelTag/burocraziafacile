<template lang="html">
    <article class="articoloList" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
        <a v-bind:href="linkArticolo" itemprop="url">
            <div class="columns">
                <div class="column">
                    <h2 itemprop="name headline" class="title is-2" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h2>
                    <dataArticolo v-bind:articolo="articolo"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-two-quarters">
                    <figure itemscope itemtype="https://schema.org/ImageObject">
                        <img itemprop="image" v-bind:src="immagine_principale.url" v-bind:title="immagine_principale.alt" v-bind:alt="immagine_principale.alt" />
                    </figure>
                </div>
                <div itemprop="description"  class="column is-two-quarters" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />
            </div>
        </a>

    </article>



</template>

<script>
import dataArticolo from '~/components/dataArticolo.vue'
import PrismicDom from 'prismic-dom'
import {getSobstituteImage} from '~/tools/images.js'


export default {
    props: ['articolo'],
    computed: {
        // a computed getter
        linkArticolo: function () {
            let categoria = this.articolo.data.categoria.uid;

            return (categoria + "/" + this.articolo.uid);
        },
		immagine_principale: function () {
			let immagineData = {
				url: this.articolo.data.immagine_principale[0].immagine.url,
				alt: this.articolo.data.immagine_principale[0].alt,
				title: this.articolo.data.immagine_principale[0].alt,
			}
			
			
			immagineData.url = getSobstituteImage (this.articolo);
			
			
			return immagineData;
		},
    },
    data: function () {
        return {
            PrismicDom: PrismicDom
        }
    },
    components: {
        dataArticolo
    }
}
</script>

<style lang="scss">
    .articoloList {
        a {
            color: inherit;
        }
        padding: 2rem;
        border-top-color: $orangePratiche;
        border-top-width: .1rem;
        border-top-style: solid;
        margin-bottom: 2rem;
        // padding-top: 15px;
        // padding-bottom: 15px;
        // border-bottom: 1px solid;
        // border-bottom-color: $grey-ligh;
    }
</style>

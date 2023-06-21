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
                        <img itemprop="image" v-bind:src="immagine_principale.url" v-bind:alt="immagine_principale.alt" v-bind:title="immagine_principale.title" />
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
import {getSobstituteImage} from '~/tools/images.js'

export default {
    props: ['articolo'],
    data: function () {
        return {
            PrismicDom: PrismicDom,
        }

    },
	computed: {
		// a computed getter
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

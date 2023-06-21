<template lang="html">
	<a v-bind:href="'/' + articolo.data.categoria.uid + '/' + articolo.uid">
		<div class="columns is-gapless">
			<div class="column is-6">
				<img v-bind:src="immagine_principale.url" v-bind:title="immagine_principale.alt" v-bind:alt="immagine_principale.alt" />
			</div>
			<div class="column">
				<div class="title is-6" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
				<!-- <p v-html="PrismicDom.RichText.asText(articolo.data.abstract)" /> -->
				<p class="">
					<span class="button is-light is-small">Leggi la guida</span>
				</p>
			</div>
		
		</div>
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

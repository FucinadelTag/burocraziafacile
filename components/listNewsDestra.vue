<template lang="html">

        <div class="destra">
            <div class="titolo">Le nostre guide</div>
            <article class="" v-for="articolo in articoli" v-bind:articolo="articolo">
                <destraListArticoli v-bind:articolo="articolo"/>


                <hr>
            </article>
        </div>




</template>

<script>
import PrismicDom from 'prismic-dom'
import destraListArticoli from '~/components/destraListArticoli.vue'

export default {
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoliHome'],
            PrismicDom: PrismicDom
        }
    },
	components: {
		destraListArticoli
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
    img {
        padding-right: 1rem;
    }
    .linkmore {
        margin-top: 10rem;
        font-style: italic;
    }
}
</style>

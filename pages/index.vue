<template>
    <div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
      <div class="tile is-parent">
        <article class="tile is-child">
          <p class="title" v-html="PrismicDom.RichText.asText(firstArticle.data.titolo)"/>
          <p class="subtitle" v-html="PrismicDom.RichText.asText(firstArticle.data.abstract)"/>
          <figure class="image is-2by1">
            <img v-bind:src="firstArticle.data.immagine_principale[0].immagine.url" v-bind:alt="firstArticle.data.immagine_principale[0].alt" v-bind:title="firstArticle.data.immagine_principale[0].title" />
          </figure>
        </article>
      </div>
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PrismicDom from 'prismic-dom'
export default {
    middleware: 'getArticoliHome',
    computed: {
        // a computed getter
        firstArticle: function () {
            return this.articoli[0];
        }
    },
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoliHome'],
            PrismicDom: PrismicDom,
        }
    },
}
</script>

<style>

</style>

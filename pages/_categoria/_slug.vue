<template lang="html">
    <article class="content slug" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
        <header class="testata">
            <h1 class="title is-2" itemprop="name headline" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"></h1>

        </header>
        <div class="columns barraShare">
            <div class="column is-3 addthis_inline_share_toolbox"></div>
            <div class="column">
                <span class="is-pulled-left">
                    <dataArticolo v-bind:articolo="articolo"/>
                </span>

            </div>

        </div>
        <figure itemscope itemtype="https://schema.org/ImageObject">
            <img itemprop="image"  v-bind:src="immagine_principale.url" v-bind:alt="immagine_principale.alt" v-bind:title="immagine_principale.title" />
        </figure>

        <section class="abstract section"  itemprop="description" v-html="PrismicDom.RichText.asHtml(articolo.data.abstract)" />

            <section itemprop="articleBody"  class="section" v-for="(slice, key, index) in articolo.data.body" :key="articolo.id">

                <paragrafoArticolo v-if="slice.slice_type == 'paragrafo'"  v-bind:paragrafo="slice" v-bind:indice="key" />

                <callToActionArticolo v-if="slice.slice_type == 'riepilogo_call_to_action'"  v-bind:paragrafo="slice"/>

            </section>

            <section class="section comments">
                <hr>
                <vue-disqus shortname="https-www-burocraziafacile-it" :identifier="articolo.uid" :url="articoloAbsoluteUrl"></vue-disqus>
            </section>

            <!-- <hr>
            <section id="disqus_thread"></section>
            <script>

                /**
                *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
                var disqus_config = function () {
                    this.page.url = articoloAbsoluteUrl;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = articolo.uid; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://https-www-burocraziafacile-it.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->

    </article>




</template>

<script>
import PrismicDom from 'prismic-dom'
import dataArticolo from '~/components/dataArticolo.vue'
import paragrafoArticolo from '~/components/paragrafoArticolo.vue'
import callToActionArticolo from '~/components/callToActionArticolo.vue'

import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
    middleware: 'getArticolo',
    data: function () {
        return {
            articolo: this.$store.getters['articoli/getArticolo'],
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
            return immagineData;
        },
        articoloAbsoluteUrl: function () {

            return 'https://www.burocraziafacile.it/' + this.articolo.data.categoria.uid + '/' + this.articolo.uid;
        }
    },
    components: {
        dataArticolo,
        paragrafoArticolo,
        callToActionArticolo,
        VueDisqus,
    },
    head () {
        return {
            title:  this.articolo.data.meta_title != null ? this.articolo.data.meta_title : PrismicDom.RichText.asText(this.articolo.data.titolo),
            meta: [
                { hid: 'description', name: 'description', content: this.articolo.data.meta_description != null ? this.articolo.data.meta_description : PrismicDom.RichText.asText(this.articolo.data.abstract) },
                { hid: 'og:title', property: 'og:title', content: PrismicDom.RichText.asText(this.articolo.data.titolo) },
                { hid: 'og:type', property: 'og:type', content: 'article'},
                { hid: 'og:description', property: 'og:description', content: PrismicDom.RichText.asText(this.articolo.data.abstract)},
                { hid: 'og:image', property: 'og:image', content: this.immagine_principale.url},
                { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.immagine_principale.url},
                { hid: 'og:url', property: 'og:url', content: this.articoloAbsoluteUrl},
                { hid: 'fb:app_id', property: 'fb:app_id', content: '1888065901523051'},

            ],
            script: [
                { src: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a3005a731053dc2' }
            ]
        }
    }
}
</script>

<style lang="scss">
.slug {
    .section {
        padding-left: 7rem;
        padding-right: 7rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    @media screen and (max-width: 768px) {

    	.section {
            padding-left: 0rem;
            padding-right: 0rem;
    	}

    }

    .barraShare {
        margin-bottom: 1.2rem;
    }

    .title {
        font-weight: 700;
        font-size: 2.6rem;
    }

    .abstract {
        font-style: italic;
    }

    .testata {
        margin-bottom: 1rem;
    }

}


</style>

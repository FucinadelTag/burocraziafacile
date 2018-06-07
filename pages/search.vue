<template lang="html">
    <div class="content">
        <div class="emptyResults has-text-centered" v-if="articoli.length == 0" >

            <div class="columns is-centered">
                <div class="column is-narrow">
                    Nessun articolo trovato con il termine <span class="query">{{query}}</span>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-narrow">
                        <searchForm />
                </div>
            </div>
        </div>
        <div class="results" v-if="articoli.length > 0" >
                {{articoli.length}} articoli trovati con il termine <span class="query">{{query}}</span>
        </div>
        <articoloList v-if="articoli.length > 0" v-for="articolo in articoli" v-bind:articolo="articolo" :key="articolo.id"/>

    </div>

</template>

<script>
import articoloList from '~/components/articoloList.vue'
import searchForm from '~/components/searchForm.vue'

export default {
    middleware: 'getArticoliSearch',
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoliSearch'],
            query: this.$store.getters['articoli/getQuerySearch'],
        }
    },
    components: {
        articoloList,
        searchForm
    }

}
</script>

<style lang="scss">
    .space {
        padding-top: 10px;
    }
    .emptyResults {
        margin-bottom: 20px;
        font-size: 150%;
        .query {
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    .results {
        margin-bottom: 20px;
        .query {
            text-transform: uppercase;
            font-weight: bold;
        }
    }
</style>

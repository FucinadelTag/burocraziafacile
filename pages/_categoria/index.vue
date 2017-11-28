<template lang="html">
    <div class="columns">
        <div class="column is-two-thirds">
            <h1 class="title space">{{currentCategoria.name}}</h1>
            <div class="listIntro">
                    Ultimi articoli
            </div>
            <articoloList v-for="articolo in articoli" v-bind:articolo="articolo" :key="articolo.id"/>
        </div>
        <div class="column">

        </div>
    </div>

</template>

<script>
import articoloList from '~/components/articoloList.vue'

export default {
    middleware: 'getArticoliByCategoria',
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoli'],
            currentCategoria: this.$store.getters.getCurrentCategoria
        }
    },
    components: {
        articoloList
    }
}
</script>

<style lang="scss">
    .space {
        padding-top: 10px;
    }
    .listIntro {
        border-bottom: 1px solid;
        border-bottom-color: $grey-ligh;
        border-top: 1px solid;
        border-top-color: $grey-ligh;
        padding: 3px;
        margin-bottom: 20px;
        text-transform: uppercase;
    }
</style>

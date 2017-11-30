<template lang="html">
    <div class="content">
        <div class="listIntro">
                <h1 class="subtitle is-5">{{currentCategoria.name}}: Ultimi articoli</h1>
        </div>
        <articoloList v-for="articolo in articoli" v-bind:articolo="articolo" :key="articolo.id"/>
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
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 90%;
    }
</style>

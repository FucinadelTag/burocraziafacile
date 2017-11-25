<template lang="html">
    <div>
        <articoloList v-for="articolo in articoli" v-bind:articolo="articolo" :key="articolo.id"/>
    </div>

</template>

<script>
import articoloList from '~/components/articoloList.vue'

export default {
    middleware: 'getArticoliByCategoria',
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoli']
        }
    },
    components: {
        articoloList
    }
}
</script>

<style lang="scss">
</style>

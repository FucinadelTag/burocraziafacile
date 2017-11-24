<template lang="html">
    <div>
        <h1 v-for="articolo in articoli"  class="red">{{articolo.uid}}</h1>
    </div>

</template>

<script>

export default {
    middleware: 'getArticoliByCategoria',
    data: function () {
        return {
            articoli: this.$store.getters['articoli/getArticoli']
        }
    }
}
</script>

<style lang="scss">
</style>

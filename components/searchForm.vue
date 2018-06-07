<template lang="html">
    <section>
        <form accept-charset="UTF-8" action="/search" method="GET">
            <div class="field has-addons">
                <div class="control">
                    <input required class="input" v-bind:value="query" name="q" type="text">
                </div>
                <div class="control">
                    <button class="button" type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    //props: ['isActive'],
    data: function () {
        return {
            query: this.$store.getters['articoli/getQuerySearch'],
        }
    }
}
</script>

<style lang="scss">
</style>

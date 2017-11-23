<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <MyMenu :isActive="isActive"/>

                <nuxt/>

                <!-- <div class="columns ">
                    <div class="column is-three-quarters">
                        Second column
                    </div>
                    <div class="column">
                        Third column
                    </div>
                </div> -->
            </div>

        </div>

    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'

    export default {
        components: {
            MyMenu
        },
        data (context) {
            //console.log(context);
            return { isActive: 'palla' }
        }
    }
</script>

<style lang="scss">

</style>

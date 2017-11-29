<template>
    <div class="container">
            <div class="content">
                <MyMenu/>
                <div class="columns padding">
                    <div class="column is-two-thirds default">
                        <nuxt/>
                    </div>
                    <div class="column">
                        Destra
                    </div>
                </div>


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

</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'

    export default {
        components: {
            MyMenu
        },
        data (context) {
            //console.log(context);
            return {
                title: this.$store.getters.getTitle,
                description: this.$store.getters.getDescription
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ]
        }
  }
    }
</script>

<style lang="scss">
    .padding {
        padding-left: 10px;
        padding-right: 10px;
    }

    .default {
        border-right: 1px solid;
        border-right-color: $grey-ligh;
    }
</style>

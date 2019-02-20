<template>
    <div>
        <myMenu/>
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <nuxt/>
                        </div>
                        <div class="column">
                            <bannerDestra/>
                            <formNewsletter/>
                            <listNewsDestra/>
                        </div>
                    </div>

                </div>
                <bannerFooter/>
            </section>
        <myFooter/>
        <script src="//rum-static.pingdom.net/pa-5afb5f9129ccc50006000126.js" async></script>
        <script type="text/javascript">
            var subscribersSiteId = '93023d97-e7f7-4816-babb-9d7ec25913e6';
        </script>
        <script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
    </div>

</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import bannerDestra from '~/components/bannerDestra.vue'
    import listNewsDestra from '~/components/listNewsDestra.vue'
    import formNewsletter from '~/components/formNewsletter.vue'
    import bannerFooter from '~/components/bannerFooter.vue'
    import myFooter from '~/components/footer.vue'

    export default {
        components: {
            MyMenu,
            listNewsDestra,
            formNewsletter,
            bannerFooter,
            bannerDestra,
            myFooter

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
        },
    }
</script>

<style lang="scss">
    .padding {
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .default {
        .contenuto {
            //margin-top: 10px;
            //border-top: 1px solid;
            //border-top-color: $grey-ligh;
        }

        .footer {
            margin-top: 5rem;
            padding-bottom: 3rem;
        }
    }
</style>

<template>
    <div class="default">
        <div class="container">
            <div class="content">
                <MyMenu/>
                <div class="columns padding">
                    <div class="column is-two-thirds">
                        <nuxt/>
                    </div>
                    <div class="column">
                        <formNewsletter/>
                        <listNewsDestra/>

                    </div>
                </div>
            </div>
            <bannerFooter/>
        </div>
        <myFooter/>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
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
            .Cookie {
                font-size: 0.8rem;
                background-color: #000000;
                color: #ffffff;
                margin: 0rem;
                > * {
                    margin: 0;
                    align-self: center;
                }
            }
            .Cookie--base {
                padding-left: 0.1rem;
                padding-top: 0.1rem;
                padding-bottom: 0.1rem;
                margin: 0rem;
            },
            .Cookie__button {
                padding-top: 0rem;
                padding-bottom: 0rem;
            }
        }

        //border-right: 1px solid;
        //border-right-color: $grey-ligh;
    }
</style>

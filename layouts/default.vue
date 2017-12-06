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
        </div>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                 <p>
                    <strong>Burocraziafacile</strong> è un progetto di <i>Fucina del Tag</i>. | Via Ampère 61/A - P.Iva 03201900960
                 </p>
                </div>
            </div>
        </footer>
    </div>


</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import listNewsDestra from '~/components/listNewsDestra.vue'
    import formNewsletter from '~/components/formNewsletter.vue'


    export default {
        components: {
            MyMenu,
            listNewsDestra,
            formNewsletter
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
        padding-top: 0.5rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }

    .default {
        .footer {
            margin-top: 5rem;
            padding-bottom: 3rem;
        }
        //border-right: 1px solid;
        //border-right-color: $grey-ligh;
    }
</style>

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

                <div class="columns">
                    <div class="column">
                        <p class="title is-4">
                            Chi siamo
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div class="column">
                        <p class="title is-4">
                            Dubbi o domande?
                        </p>
                        <p class="subtitle is-6">
                            Faremo il possibili per rispondere alle tue domande.
                        </p>
                        <section>
                            <form accept-charset="UTF-8" action="https://formkeep.com/f/37cf41656aad" method="POST">
                                <div class="field">
                                    <label class="label is-small">Email:</label>
                                    <p class="control">
                                        <input required class="input" type="email" name="email" placeholder="Email">
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label is-small">Messaggio:</label>
                                    <p class="control">
                                        <textarea required class="textarea" name="messaggio" placeholder="Messaggio"></textarea>
                                    </p>
                                </div>
                                <div class="control has-text-centered">
                                    <button class="button">Contattaci!</button>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div class="column">
                        <p class="title is-4">
                            Privacy
                        </p>
                        <p>
                            <strong>Burocraziafacile</strong> è un progetto di <i>Fucina del Tag</i>
                            <br> Via Ampère 61/A - P.Iva 03201900960
                         </p>
                    </div>

                </div>
            </div>
            <cookie-law theme="base" message="Questo sito Web utilizza i cookie per assicurarti la migliore esperienzadi uso." buttonClass='button' buttonText='Ok'></cookie-law>
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

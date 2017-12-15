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
                            Burocrazia Facile è il sito d'informazione che ti aiuta a trovare soluzioni semplici e veloci alle pratiche di tutti i giorni con categorie dedicate al mondo della casa, dell'auto e del lavoro.
                        </p>
                        <p>
                            Le guide gratuite ti mostrano passo dopo passo le procedure per completare le tue pratiche e ottenere tutti i documenti necessari.
                        </p>
                        <p>
                            La sezione novità ti consente di rimanere aggiornato sulle ultime notizie, incentivi e scadenze della burocrazia.
                        </p>
                    </div>
                    <div class="column">
                        <p class="title is-4">
                            Dubbi o domande?
                        </p>
                        <p class="subtitle is-6">
                            Scrivici un messaggio e ti risponderemo il prima possibile.
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
                    <div class="column has-text-centered">
                        <p class="title is-4">
                            Privacy
                        </p>
                        <p>
                            <a href="//www.iubenda.com/privacy-policy/8226676" class="iubenda-white no-brand iubenda-embed" title="Privacy Policy">Privacy Policy</a>
                        </p>
                        <br>
                        <p class="has-text-centered">
                            <strong>Burocraziafacile.it</strong><br>è un progetto di <i>Fucina del Tag</i>
                            <p>
                                <br> Via Ampère 61/A
                                <br>20131 Milano
                                <br>P.Iva 03201900960
                            </p>

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

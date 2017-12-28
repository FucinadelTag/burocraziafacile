<template lang="html">
    <footer class="footer">
        <div class="container">

            <div class="columns">
                <div class="column">
                    <p class="title is-4">
                        Chi siamo
                    </p>
                    <p>
                        BurocraziaFacile.it è il sito d'informazione che ti aiuta a trovare soluzioni semplici e veloci alle pratiche di tutti i giorni con categorie dedicate al mondo della casa, dell'auto e del lavoro.
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
                        <strong>Burocraziafacile.it</strong><br>è un progetto di <i>Script Media Group Ltd</i>
                        <p>
                            <br> 90 Leinster Road
                            <br>Rathmines Dublin 6
                            <br>Vat IE​3458266BH
                        </p>

                     </p>
                     <p class="is-size-7">
                        <a href="/note-legali">Note legali</a>
                     </p>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
import noteLegali from '~/components/note_legali.vue'


export default {
    components: {
        noteLegali,
    }

}
</script>

<style lang="scss">
    .noteLegali {
        padding: 2rem;
    }
</style>

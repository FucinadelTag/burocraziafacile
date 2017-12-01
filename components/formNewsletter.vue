<template lang="html">
    <section class="box formNewsletter">
        <p class="title is-4 is-centered">Rimani sempre aggiornato</p>
        <p class="subtitle is-6 is-centered">Ricevi le nostre notizie una volta al mese</p>
        <div class="field">
            <p class="control">
                <input class="input" type="email" placeholder="Email">
            </p>
        </div>
        <div class="control has-text-centered">
            <button class="button">Iscriviti adesso</button>
        </div>
        <p class="spiegazione">
            Una volta al mese ti invieremo un'email con le ultime novità e istruzioni per <strong>muoverti con facilità</strong> nel mondo della burocrazia in italia.
        </p>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.formNewsletter {
    padding: 2rem;
    border-top-color: $bluePratiche;
    border-top-width: .1rem;
    border-top-style: solid;
    margin-bottom: 2rem;
    margin-top: 0.9rem;

    .spiegazione {
        font-size: 90%;
        font-style: italic;
    }

    .button {
        background-color: #ea6728;
        color: #ffffff;
        //text-transform: uppercase;

        &:hover {
            color: #ffffff;
            background-color: #f87a13;
        }

        &:visited {
            color: #ffffff;
            background-color: #f87a13;
        }
    }
    // padding-top: 15px;
    // padding-bottom: 15px;
    // border-bottom: 1px solid;
    // border-bottom-color: $grey-ligh;
}
</style>

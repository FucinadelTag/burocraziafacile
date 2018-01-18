<template lang="html">
<a v-bind:href="linkWithTag" v-on:click="articleTrack()" target="_blank">
    <div class="columns banner is-centered">
        <div class="logoPratiche column is-one-quarter has-text-centered">
            <img v-bind:src="logoPratiche" alt="pratiche.it">
        </div>
        <div class="column payoff has-text-centered">
            Visure e Certificati Online
        </div>
        <div class="column is-one-quarter">
            <div class="callToAction has-text-centered">
                <div class="button">Richiedi Subito</div>
            </div>
        </div>

    </div>

</a>

</template>

<script>
export default {
    data: function () {
        return {
            logoPratiche: this.$store.getters.getLogoPraticheUrl
        }
    },
    computed: {
        linkWithTag: function () {

            let taggedLink = 'https://www.pratiche.it/?utm_source=burocraziafacile&utm_medium=banner&utm_campaign=footer';

            return taggedLink;
        },
    },
    methods: {
        articleTrack: function () {
            fbq('trackCustom', 'BannerAction', {
                button_uid: 'footer'
            });

            ga('send', {
                hitType: 'event',
                eventCategory: 'BannerAction',
                eventAction: 'footer'
            });

        }
    }
}
</script>

<style lang="scss">
.banner {
    border: 0.01rem solid;
    border-color: #e3e3e3;
    padding: 1rem;

    .logoPratiche {
        border-right: 0.01rem solid;
        border-color: #e3e3e3;
    }

    .payoff {
        padding-top: 1.5rem;
        font-size: 270%;
        color: $bluePratiche;
        font-weight: bold;
        border-right: 0.01rem solid;
        border-color: #e3e3e3;
    }

    .callToAction {
        padding-top: 1.5rem;
    }
}
</style>

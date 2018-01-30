<template lang="html">
<a v-bind:href="linkWithTag" v-on:click="bannerTrack()" target="_blank">
    <div class="box bannerDestra is-centered">
        <div class="logoPratiche has-text-centered">
            <img v-bind:src="logoPratiche" alt="pratiche.it">
        </div>
        <div class="payoff has-text-centered">
            Visure e Certificati Online
        </div>
        <div class="">
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

            let taggedLink = 'https://www.pratiche.it/?utm_source=burocraziafacile&utm_medium=banner&utm_campaign=destra';

            return taggedLink;
        },
    },
    methods: {
        bannerTrack: function () {
            fbq('trackCustom', 'BannerAction', {
                button_uid: 'footer'
            });

            ga('send', {
                hitType: 'event',
                eventCategory: 'BannerAction',
                eventAction: 'destra'
            });

        }
    }
}
</script>

<style lang="scss">
.bannerDestra {
    border-top-color: $bluePratiche;
    border-top-width: .1rem;
    border-top-style: solid;
    padding: 1rem;

    .logoPratiche {
        border-bottom: 0.01rem solid;
        border-color: #e3e3e3;
    }

    .payoff {
        padding-top: 1.5rem;
        font-size: 150%;
        color: $bluePratiche;
        font-weight: bold;
    }

    .callToAction {
        padding-top: 1.5rem;
    }
}
</style>

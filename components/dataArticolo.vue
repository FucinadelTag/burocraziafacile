<template lang="html">
    <div>
        Scritto da: <span class="data">Redazione</span> il <span class="data"><time>{{dataArticolo}}</time></span>
    </div>
</template>

<script>
import Moment from 'moment'

export default {
    props: ['articolo'],
    computed: {
        // a computed getter
        dataArticolo: function () {
            return Moment(this.articolo.last_publication_date).format('DD MMMM YYYY');
        }
    },
}
</script>

<style lang="css">
.data {
    font-size: 90%;
    font-style: italic;
}
</style>

<template lang="html">
    <span class="data"><time>{{dataArticolo}}</time></span>
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

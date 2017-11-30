<template lang="html">
    <div class="dataArticolo">
        <span class="data"><time>{{dataArticolo}}</time></span> |
        <span class="tag">
            {{articolo.data.categoria.uid}}
        </span>
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

<style lang="scss">

.dataArticolo {
        font-size: 90%;
        margin-bottom: 0rem;
    .data {

        font-style: italic;
    }
    .tag {

        margin-left: 0rem;
    }
}
</style>

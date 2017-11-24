<template lang="html">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <a v-for="item in menuItems" class="navbar-item" v-bind:href="'/' + item.link" v-bind:class="item.isActive">{{item.name}}</a>
            </div>
        </div>
    </nav>
</template>

<script>
import _ from 'lodash'

export default {
    //props: ['isActive'],
    data: function () {
        return {
            menuItems: this.$store.getters.getCategorie
        }
    }
}
</script>

<style lang="scss">
nav {
    margin-bottom: 10px;
    border-bottom: 1px solid;
    border-bottom-color: $grey;

    .active {
        background-color: #f1f1f1;
    }
}
</style>

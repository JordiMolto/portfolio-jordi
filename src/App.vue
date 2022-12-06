<template>
    <h2>Jordi</h2>
    <home></home>
</template>

<script lang="ts">
import Home from './views/Home.vue';
import './App.scss';
import './scss/botones.scss';
import './scss/layouts.scss';
import './scss/mixins.scss';
import './scss/variables.scss';
import './scss/utilidades.scss';

export default {
    components: { Home },
};
</script>

<style scoped>
h2 {
    font-family: 'Clicker Script', cursive;
}
</style>
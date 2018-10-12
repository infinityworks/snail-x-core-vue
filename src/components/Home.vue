<template>
    <div id="home">
        <h1 v-if="loggedIn" style="color: whitesmoke">Welcome, {{ userEmail }}</h1>
        <h1 v-else style="color: whitesmoke">Welcome, please register or login.</h1>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    export default {
        name: 'home',
        computed: {
            ...mapGetters([
                'loggedIn',
                'userEmail'
            ])
        }
    }
</script>

<style>
    #home {
        position:fixed;
        top: 40%;
        left: 32%;
        width: 50%;
    }
</style>
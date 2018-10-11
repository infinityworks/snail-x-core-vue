<template>
    <div id="home">
        <h1 id="welcome_message" style="color: whitesmoke">Welcome, please register or login.</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            if (this.loggedIn) {
                alert("logged insdfsdfsdfsfdsdf")
            }
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
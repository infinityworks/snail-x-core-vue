<template>
    <div id="home">
        <h1 v-if="!loggedIn"  style="color: whitesmoke">Welcome, please register or login.</h1>
        <div v-if="loggedIn" id="predictions"></div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    export default {
        name: 'home',
        computed: {
            ...mapGetters([
                'loggedIn'
            ])
        },
        methods: {
            getPredictions() {
                this.$store.dispatch('getPredictions')
                    .then((response) => {
                        if(response.data.message !== "Error. No predictions made") {
                            var printed_table = '<table><tr><th>Race ID</th><th>Snail Name</th> </tr>';


                            for (var y = 0; y < response.data.length; y++) {
                                printed_table += '<tr><td>' + (y + 1) + '</td><td>' + response.data[y][1] + '</td></tr>';
                            }
                            printed_table += '</table>';
                        } else {
                            printed_table = "<center><h3 style='background-color:white; padding:5px;'>You have not made any predictions. To do so <a href='snailx.racing'>Click Here</a></h3></center>"

                        }
                        document.getElementById('predictions').innerHTML = printed_table;
                    })
            }
        },
        beforeMount() {
            this.getPredictions()
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
    /*--- User predictions table styling ---*/
    table {
        width:70%;
        background-color:white;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 15px;
        text-align: left;
    }
    /*--- User predictions table styling end ---*/
</style>

<template>
    <div id="home">
        <h1 v-if="!loggedIn"  style="color: whitesmoke">Welcome, please register or login.</h1>
        <div v-if="loggedIn" id="predictions-banner"></div>
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
                        if(response.data[0] !== "No Open Round") {
                            if (response.data.message !== "Error. No predictions made") {


                                document.getElementById('predictions-banner').innerHTML = "Your predictions for round " + response.data[0][4] + ":";
                                var printed_table = '<table><tr><th>Race No.</th><th>Snail No.</th><th>Snail Name</th><th>Trainer</th> </tr>';

                                for (var y = 0; y < response.data.length; y++) {
                                    printed_table += '<tr><td>' + (y + 1) + '</td><td>' + response.data[y][1] + '</td><td>' + response.data[y][2] + '</td><td>' + response.data[y][3] + '</td></tr>';
                                }
                                printed_table += '</table>';
                            } else if (response.data.message == "Error. No predictions made") {
                                printed_table = "<center><h3 style='background-color:white; margin-right:30%;'>You have not made any predictions. To do so <a href='snailx.racing'>Click Here</a></h3></center>"
                                printed_table+="<img height=70% width=70% src=https://static.euronews.com/articles/stories/03/22/91/52/880x495_cmsv2_1f2eea27-fa79-5a58-90f2-c298315d4e68-3229152.jpg>"
                            }
                        } else {
                            printed_table = "<center><h3 style='background-color:white; padding:5px; margin-right:50%'>No rounds currently open!</h3></center>"
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
    }
    /*--- prediction banner styling ---*/

    #predictions-banner{
        background-color: white;
        width: 35%;
        margin-bottom: 5%;
        margin-left: 17.5%;
        text-align: center;
    }
    /*--- prediction banner styling end ---*/

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

<template>
    <div id="home">
        <h1 v-if="!loggedIn"  style="color: whitesmoke">Welcome, please register or login.</h1>
        <h1 v-if="loggedIn" id="home-message"></h1>
        <div v-if="loggedIn" id="predictions-banner"></div>
        <div v-if="loggedIn" id="predictions"></div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    export default {
        name: 'home',
        data() {
            return {
                predictions: false,
                openRound: false,
                responseData: "",
            }
        },
        computed: {
            ...mapGetters([
                'loggedIn'
            ])
        },
        created() {
            this.checkFutureRound()
        },
        methods: {
            checkFutureRound() {
                this.$store.dispatch('checkFutureRound')
                    .then((response) => {
                        const status = response.data["status"];
                        let update_text = "Next round opens in ";

                        if (status === 1) {
                            const days = response.data["days"];
                            if (days === 1) {
                                update_text = update_text + "1 day, ";
                            } else {
                                update_text = update_text + days + " days, ";
                            }
                            const hours = response.data["hours"];
                            if (hours === 1) {
                                update_text = update_text + "1 hour, ";
                            } else {
                                update_text = update_text + hours + " hours, ";
                            }
                            const minutes = response.data["minutes"];
                            if (minutes === 1) {
                                update_text = update_text + "and 1 minute";
                            } else {
                                update_text = update_text + "and " + minutes + " minutes";
                            }

                            document.getElementById("home-message").innerHTML = update_text;
                        }
                        else {
                            this.checkForPredictions()
                            this.setPredictionsDisplay()
                        }
                    })
                },
                checkForPredictions() {
                    this.$store.dispatch("getPredictions")
                        .then((response) => {
                            this.responseData = response.data;
                            alert("check for predictions")
                            alert(response.data[0])
                            if (response.data[0] !== "No Open Round") {
                                this.openRound = false;
                            }
                            else {
                                this.openRound = true;
                            }
                            if (response.data.message === "Error. No predictions made") {
                                this.predictions = false;
                            }
                            else {
                                this.predictions = true;
                            }
                        })
                    alert("open round")
                    alert(this.openRound)
                    alert("predictions")
                    alert(this.predictions)
                },
                setPredictionsDisplay() {
                    if (this.openRound && this.predictions) {
                        document.getElementById('predictions-banner').innerHTML = "Your predictions for round " + this.responseData[0][4] + ":";
                                    var printed_table = '<table><tr><th>Race No.</th><th>Snail No.</th><th>Snail Name</th><th>Trainer</th> </tr>';

                                    for (var y = 0; y < this.responseData.length; y++) {
                                        printed_table += '<tr><td>' + (y + 1) + '</td><td>' + this.responseData[y][1] + '</td><td>' + this.responseData[y][2] + '</td><td>' + this.responseData[y][3] + '</td></tr>';
                                    }
                                    printed_table += '</table>';
                    }
                    else if (this.openRound && !this.predictions) {
                        printed_table = "<center><h3 style='background-color:white; padding:5px;'>You have not made any predictions. To do so <a href='snailx.racing'>Click Here</a></h3></center>"
                    }
                    else if (!this.openRound) {
                        printed_table = "<center><h3 style='background-color:white; padding:5px;'>No rounds currently open!</h3></center>"
                    }
                    document.getElementById('predictions').innerHTML = printed_table;
                }
            }
    }




</script>

<style>
    #home {
        position:fixed;
        top: 40%;
        left: 32%;
    }
    /*--- future rounds message styling ---*/

    #home-message{
        background-color: white;
        /*color: black;*/
        width: 50%;
        margin-bottom: 5%;
        margin-left: 5%;
        text-align: center;
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

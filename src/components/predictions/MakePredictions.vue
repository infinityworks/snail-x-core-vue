<!--<template>-->
    <!--<div id="make-predictions">-->
        <!--<h2 class="page-title">Make Predictions Here!</h2>-->
        <!--<h3 class="round-name">{{ round_name }}</h3>-->
        <!--<hr>-->
        <!--<form>-->
            <!--<h4 class="race-number">Race 1</h4>-->
            <!--<hr>-->
            <!--<input class="radio" type="radio" name="snail" value="1">Snail 1: Snail Platt<br>-->
            <!--<p class="trainer-name">Trainer: Gareth</p><br>-->
            <!--<input class="radio" type="radio" name="snail" value="2">Snail 2: Christian Snale<br>-->
            <!--<p class="trainer-name">Trainer: Lucius</p><br>-->
            <!--<input class="radio" type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>-->
            <!--<p class="trainer-name">Trainer: Susan</p>-->
            <!--<br>-->
            <!--<hr>-->
        <!--</form>-->

        <!--<form>-->
            <!--<h4 class="race-number">Race 2</h4>-->
            <!--<hr>-->
            <!--<input class="radio" type="radio" name="snail" value="1">Snail 1: Snail Platt<br>-->
            <!--<p class="trainer-name">Trainer: Gareth</p><br>-->
            <!--<input class="radio" type="radio" name="snail" value="2">Snail 2: Christian Snale<br>-->
            <!--<p class="trainer-name">Trainer: Lucius</p><br>-->
            <!--<input class="radio" type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>-->
            <!--<p class="trainer-name">Trainer: Susan</p>-->

            <!--<input type="submit" class="btn btn-primary" value="Submit Predictions"/>-->
            <!--<button type="button" class="btn btn-warning"-->
                        <!--onclick="window.history.back()">Back</button>-->
        <!--</form>-->
    <!--</div>-->
<!--</template>-->

<template>
    <div id="make-predictions">
        <h2 class="page-title">Make Predictions Here!</h2>
        <h3 class="round-name">{{ round_name }}</h3>
        <hr>
        <form>
            <div v-for="race in races" class="race-number"> {{ race }}</div>
                <span classs="radio">
                    <span v-html="race.snailid" {{ race.snailid | race.snailname | race.trainer}}
                </span>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'Make-Predictions',
        data() {
            return {
                round_id: 0,
                round_name: "",
                races: "",
            }
        },

        created () {
          this.get_open_round()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'get-open_round'
        },
        methods: {
            get_open_round()
            {
                this.$store.dispatch('getOpenRound', {})
                    .then((response) => {
                        console.log(response);
                        this.round_name = response.data.roundname;
                        this.round_id = response.data.roundid;
                        this.races = response.data.races;

                        alert(this.races.data)

                    })
            }
        }
    }
</script>

<style scoped>
    #make-predictions {
        /*position: fixed;*/
        /*left: 24.5%;*/
        /*top: 15%;*/
        width: 50%;
        border: 1px solid grey;
        background-color: white;
        margin: 5% auto auto;
        padding: 20px;
    }

    input {
        margin-right: 1em;
    }

    input.radio {
        float: right;
        margin-top: 1em;
    }



</style>
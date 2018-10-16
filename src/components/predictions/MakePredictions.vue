<template>
    <div id="make-predictions">
        <h2 class="page-title">Make Your Predictions!</h2>
        <h3 class="round-name">Round Name</h3>
        <hr>
        <form>
            <h4 class="race-number">Race 1</h4>
            <hr>
            <input class="radio" type="radio" name="snail" value="1">Snail 1: Snail Platt<br>
            <p class="trainer-name">Trainer: Gareth</p><br>
            <input class="radio" type="radio" name="snail" value="2">Snail 2: Christian Snale<br>
            <p class="trainer-name">Trainer: Lucius</p><br>
            <input class="radio" type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>
            <p class="trainer-name">Trainer: Susan</p>
            <br>
            <hr>
        </form>

        <form @submit.prevent="get_open_round">
            <h4 class="race-number">Race 2</h4>
            <hr>
            <input class="radio" type="radio" name="snail" value="1">Snail 1: Snail Platt<br>
            <p class="trainer-name">Trainer: Gareth</p><br>
            <input class="radio" type="radio" name="snail" value="2">Snail 2: Christian Snale<br>
            <p class="trainer-name">Trainer: Lucius</p><br>
            <input class="radio" type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>
            <p class="trainer-name">Trainer: Susan</p>

            <input type="submit" class="btn btn-primary" value="Submit Predictions"/>
            <button type="button" class="btn btn-warning"
                        onclick="window.history.back()">Back</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Make Predictions',
        data() {
            return {
                round_id: 0,
                round_prize: 0,
                round_start: "",
                round_finish: "",
                round_name: "",

            }
        },
        methods: {
            get_open_round() {
                this.$store.dispatch('', {
                    })
                        .then((response) => {
                            print(response)
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
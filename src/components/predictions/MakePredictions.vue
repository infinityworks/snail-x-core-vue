<template>
    <div id="make-predictions">
        <h2 class="page-title">Make Your Predictions!</h2>
        <h3 class="round-name">Round Name</h3>
        <hr>
        <form>
            <h4 class="race-number">Race 1</h4>
            <hr>
            <input type="radio" name="snail" value="1">Snail 1: Snail Platt<br>
            <p class="trainer-name">Trainer: Gareth</p><br>
            <input type="radio" name="snail" value="2">Snail 2: Christian Snale<br>
            <p class="trainer-name">Trainer: Lucius</p><br>
            <input type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>
            <p class="trainer-name">Trainer: Susan</p>
            <br>
            <hr>

            <h4 class="race-number">Race 2</h4>
            <hr>
            <input type="radio" name="snail" value="1">Snail 1: Snail Platt<br>
            <p class="trainer-name">Trainer: Gareth</p><br>
            <input type="radio" name="snail" value="2">Snail 2: Christian Snale<br>
            <p class="trainer-name">Trainer: Lucius</p><br>
            <input type="radio" name="snail" value="3"> Snail 3: Shelly Brooks<br>
            <p class="trainer-name">Trainer: Susan</p>

            <input type="submit" style="float: right;" class="btn btn-primary" value="Submit Predictions"/>
            <button style="margin-right: 1em; float: right" type="button" class="btn btn-warning"
                        onclick="window.history.back()">Back</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login() {
                if (this.email !== "" && this.password !== "" && this.email.length < 100 && this.password.length < 100) {
                    this.$store.dispatch('loginUser', {
                        email: this.email,
                        password: this.password,
                    })
                        .then(() => {
                            this.$router.push({name: 'home'})
                        })
                        .catch(() => {
                            alert("Invalid login details please try again.");
                        })
                } else {
                    alert("Please enter a email and password of valid length (0 to 100 chars)");
                }
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
        margin: 200px auto auto;
        padding: 20px;
    }

    input {
        margin-bottom: 1em;
    }
</style>
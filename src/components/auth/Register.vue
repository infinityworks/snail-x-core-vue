<template>
    <div id="register">
        <form id="reg"
              method="post"
              v-on:submit="validateForm">
              <!--novalidate="true"-->
            <!--action="register()"-->

            <h3 class="page-title">Register</h3>
            <hr>
            <div class="form-group">
                <input type="text" class="form-control" name="firstName" v-model="firstName"
                       placeholder="First Name" maxlength="100" v-bind:class="{ 'is-invalid': attemptSubmit && missingFirstName }"/>
                <div class="invalid-feedback">First name is required.</div>

                <input type="text" class="form-control" name="lastName" v-model="lastName"
                       placeholder="Last Name" maxlength="100" v-bind:class="{ 'is-invalid': attemptSubmit && missingLastName }"/>
                <div class="invalid-feedback">Last name is required.</div>

                <input type="email" class="form-control" name="email" v-model="email"
                       placeholder="Email" maxlength="100" v-bind:class="{ 'is-invalid': attemptSubmit && invalidEmail }"/>
                <div class="invalid-feedback">Email is required, and must be a valid email format.</div>

                <input type="password" class="form-control" name="password" v-model="password"
                       placeholder="Password" maxlength="100" v-bind:class="{ 'is-invalid': attemptSubmit && invalidPassword }"/>
                <div class="invalid-feedback">Password must be at least 8 characters long, contain one number and one special character.</div>

                <input type="submit" style="float: right;" class="btn btn-primary" value="Register"/>

                <button style="margin-right: 1em; float: right" type="button" class="btn btn-warning"
                        onclick="window.history.back()">Back</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                attemptSubmit: false,
            }
        },
        computed: {
            missingFirstName: function () { return this.firstName === ''; },
            missingLastName: function () { return this.lastName === ''; },
            invalidEmail: function () { return this.isEmail(this.email) === false; },
            invalidPassword: function() { return this.isPassword(this.password) === false; }
        },
        methods: {
            isEmail: function (input) {
                const re = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
                return re.test(input);
            },
            isPassword: function (input) {
                const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                return re.test(input);
            },
            validateForm: function (event) {
                this.attemptSubmit = true;
                if (this.missingFirstName || this.missingLastName || this.invalidEmail || this.invalidPassword) event.preventDefault();
                if (this.email_in_db()) event.preventDefault();
                else (this.register());

                // if (!this.lastName.checkValidity()) {
                //     document.getElementById("lname").innerHTML = this.lastName.validationMessage;
                // }
                //
                //
                // if (!this.email.checkValidity()) {
                //     document.getElementById("email").innerHTML = this.email.validationMessage;
                // }
                //
                //
                // if (!this.password.checkValidity()) {
                //     document.getElementById("pswd").innerHTML = this.password.validationMessage;
                // }

            },

            email_in_db() {
                this.$store.dispatch('emailInDB', {
                    email: this.email,
                })
                    .then((response) => {
                        var result = Boolean(response.data);
                        if (result == true) {
                            alert("It exists you idiot!")
                            return true
                        }
                        else {
                            alert("Well done young one, this is a new email")
                            return false
                        }
                    })
            },
            register() {
                alert("register has been called!")
                this.$store.dispatch('registerUser', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
                        alert("going to login")
                        this.$router.push({name: 'login'})
                    })
            }
        }
    }
</script>

<style scoped>
    #register {
        position: fixed;
        top: 10%;
        left: 11%;
        width: 50%;
        border: 1px solid grey;
        background-color: #FFFFFF;
        margin: 10em;
        padding: 20px;
    }

    input {
        margin-bottom: 1em;
    }
</style>
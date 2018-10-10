<template>
    <div id="register">
        <form id="reg"
              @submit="checkForm"
              action="register()"
              method="post">
              <!--novalidate="true"-->

            <h3 class="page-title">Register</h3>
            <hr>
            <div class="form-group">
                <input type="text" class="form-control" name="firstName" v-model="firstName"
                       required placeholder="First Name"/>
                <input type="text" class="form-control" name="lastName" v-model="lastName"
                       required placeholder="Last Name"/>
                <input type="email" class="form-control" name="email" v-model="email"
                       required placeholder="Email"/>
                <input type="password" class="form-control" name="password" v-model="password"
                       required placeholder="Password"/>
                <button style="float: right;" type="button" class="btn btn-primary" @click="register()">Register
                </button>
                <button style="margin-right: 1em; float: right" type="button" class="btn btn-warning"
                        onclick="window.history.back()">Back
                </button>
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
                password: ""
            }
        },
        methods: {
            checkForm: function (e) {
                this.errors = [];
                if (this.firstName.length > 100) {
                    this.errors.push("First name exceeds maximum 100-character limit.")
                }
                if (!this.firstName) {
                    this.errors.push("First name is required.");
                }

                if (this.lastName.length > 100) {
                    this.errors.push("Last name exceeds maximum 100-character limit.")
                }
                if (!this.lastName) {
                    this.errors.push("Last name is required.");
                }

                if (this.email.length > 100) {
                    this.errors.push("Email exceeds maximum 100-character limit.")
                }
                if (!this.email) {
                    this.errors.push("Email is required.");
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }

                if (this.password.length > 100) {
                    this.errors.push("Password exceeds maximum 100-character limit.")
                }
                if (!this.password) {
                    this.errors.push("Password is required.")
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },
            validEmail: function (email) {
                const re = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
                return re.test(email);
            },
            register() {
                this.$store.dispatch('registerUser', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
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
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: localStorage.getItem('user_email') || null,
        user_first_name: localStorage.getItem('user_first_name') || null,
    },
    getters: {
        loggedIn(state) {
            return state.user !== null
        },
        userEmail(state) {
            return state.user
        },
        userFirstName(state) {
            return state.user_first_name
        }
    },
    mutations: {
        loginUser(state, { user_email, user_first_name }) {
            state.user = user_email;
            state.user_first_name = user_first_name
        },
        logoutUser(state) {
            state.user = null;
            state.user_first_name = null
        }
    },
    actions: {
        emailInDB: function (context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('https://snail-x-core.herokuapp.com/check-duplicate-email', {
                    email: credentials.email
                })
                    .then(response => {
                        return resolve(response.data["result"]);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error);
                    })
            })
        },


        loginUser(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('https://snail-x-core.herokuapp.com/login-user', {
                    email: credentials.email,
                    password: credentials.password,
                }, {
                    headers: {
                        'Content-type': 'application/json',
                }})
                    .then(response => {
                        const user_email = response.data['user_email'];
                        const user_first_name = response.data['user_first_name'];
                        localStorage.setItem('user_email', user_email);
                        localStorage.setItem('user_first_name', user_first_name);
                        context.commit('loginUser', { user_email, user_first_name });
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },


        registerUser(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('https://snail-x-core.herokuapp.com/register-user', {
                    firstName: credentials.firstName,
                    lastName: credentials.lastName,
                    email: credentials.email,
                    password: credentials.password,
                })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },

        logoutUser(context) {
            return new Promise((resolve) => {
                localStorage.removeItem('user_email');
                localStorage.removeItem('user_first_name');
                context.commit('logoutUser');
                resolve()
            })
        },

        getOpenRound(context) {
            return new Promise((resolve, reject) => {
                axios.post('https://snail-x-core.herokuapp.com/get-open-round', {
                })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        },
    }
});

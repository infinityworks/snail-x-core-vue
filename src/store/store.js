import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: localStorage.getItem('user_email') || null,
    },
    getters: {
        loggedIn(state) {
            return state.user !== null
        },
        userEmail(state) {
            return state.user
        }
    },
    mutations: {
        loginUser(state, user_email) {
            state.user = user_email
        },
        logoutUser(state) {
            state.user = null
        }
    },
    actions: {
        loginUser(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:5000/login-user', {
                    username: credentials.username,
                    password: credentials.password,
                }, {
                    headers: {
                        'Content-type': 'application/json',
                }})
                    .then(response => {
                        const user_email = response.data;
                        console.log(response.data)
                        localStorage.setItem('user_email' , response.data['request_data']);
                        context.commit('loginUser', user_email);
                        resolve(response);
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error);
                    })
            })
        },
        registerUser(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:5000/register-user', {
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
            return new Promise((resolve, reject) => {
                localStorage.removeItem('user_email')
                context.commit('logoutUser')
                resolve()
            })
        }
    }
});
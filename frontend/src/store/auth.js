import axios from "axios";
import {BASE_URL} from "../config";

export default {
    state: {
        user: [],
        user_message: [],
        is_auth: false
    },
    mutations: {
        set_user_to_state: (state, user) => {
            state.user = user
            state.is_auth = true
        },
        set_user_logout: (state) => {
            state.is_auth = false
        },
        set_user_message: (state, message) => {
            state.user_message = message
        }
    },
    getters: {
        get_user: state => state.user,
        get_is_auth: state => state.is_auth,
        get_user_message: state => state.user_message
    },
    actions: {
        async login({dispatch, commit}, {username, password}) {
            try {
                return await axios({
                    method: 'post',
                    url: `${BASE_URL}api/v1/auth/token`,
                    data: {
                        'username': username,
                        'password': password
                    }
                })
                    .then((response) => {
                        localStorage.setItem('auth_token', response.data.token);
                    })
            } catch (error) {
                commit('set_user_message', error.response.data)
                throw error
            }
        },
        async auth_user({dispatch, commit}) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/auth/users/me/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then((response) => {
                        commit('set_user_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }
        },
        async register({dispatch, commit}, {username, password}) {
            try {
                await axios({
                    method: 'post',
                    url: `${BASE_URL}api/v1/auth/users/`,
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: {
                        'username': username,
                        'password': password,
                        'is_superuser': false
                    }
                })
            } catch (error) {
                commit('set_user_message', error.response.data)
                throw error
            }
        },
        async logout({dispatch, commit}) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/user/logout/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                }).then((response) => {
                    commit('set_user_to_state', [])
                    commit('set_user_logout')
                    localStorage.removeItem('auth_token')
                })
            } catch (error) {
                throw error
            }
        }
    }
}
import axios from "axios";

export default {
    state: {
        user: [],
        user_token: []
    },
    actions: {
        async login({dispatch, commit}, {username, password}) {
            try {
                return await axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/v1/auth/token',
                    headers: {
                        // 'accept': 'application/json',
                        // 'Content-Type': 'application/json'
                    },
                    data: {
                        'username': username,
                        'password': password,
                        'is_superuser': false
                    }
                })
                    .then((response) => {
                        commit('set_user_token_to_state', response.data)
                    })
            } catch (error) {
                console.log(error)
            }
        },
        async auth_user({dispatch, commit}, token) {
            try {
                return await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/v1/auth/users/me/',
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })
                    .then((response) => {
                        commit('set_user_to_state', response.data)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        async register({dispatch, commit}, {username, password}) {
            try {
                return await axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/v1/auth/users/',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: {
                        'username': username,
                        'password': password
                    }
                })
                    .then((response) => {
                        commit('set_user_to_state', response.data)
                    })
            } catch (e) {
                console.log(e)
            }
        }
    },
    mutations: {
        set_user_token_to_state: (state, user_token) => {
            state.user_token = user_token
        },
        set_user_to_state: (state, user) => {
            state.user = user
        }
    },
    getters: {
        get_user_token: state => state.user_token,
        get_user: state => state.user

    }
}
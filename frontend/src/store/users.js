import axios from "axios";

export default {
    state: {
        users: []
    },
    actions: {
        async fetch_users({dispatch, commit}) {
            try {
                return await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/v1/user/all/',
                })
                    .then((response) => {
                        commit('set_users_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }
        },
        async delete_user({dispatch, commit}, user_id) {
            try {
                return await axios({
                    method: 'delete',
                    url: `http://127.0.0.1:8000/api/v1/user/delete/${user_id}/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
            } catch (error) {
                throw error
            }
        }

    },
    mutations: {
        set_users_to_state: (state, users) => {
            state.users = users
        }
    },
    getters: {
        get_users: state => state.users

    }
}
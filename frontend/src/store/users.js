import axios from "axios";
import {BASE_URL} from "@/config";
import VueRouter from "../router"

export default {
    state: {
        users: []
    },
    mutations: {
        set_users_to_state: (state, users) => {
            state.users = users
        }
    },
    getters: {
        get_users: state => state.users
    },
    actions: {
        async fetch_users({dispatch, commit, state}) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/user/all/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then((response) => {
                        console.log(response.status)
                        commit('set_users_to_state', response.data)
                    })
            } catch (error) {
                console.error(error)
                VueRouter.push({name: 'main'})
            }
        },
        async delete_user({dispatch, commit, state}, user_id) {
            try {
                return await axios({
                    method: 'delete',
                    url: `${BASE_URL}api/v1/user/delete/${user_id}/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
            } catch (error) {
                throw error
            }
        }
    }
}
import axios from "axios";
import {BASE_URL} from "@/config";

export default {
    state: {
        category_id: []
    },
    mutations: {
        set_category_id_to_state: (state, category) => {
            state.category_id = category
        }
    },
    getters: {
        get_user_category_id: stare => stare.category_id
    },
    actions: {
        async create_category(context, {category_title}) {
            try {
                return await axios({
                    method: 'post',
                    url: `${BASE_URL}api/v1/category/create/`,
                    data: {
                        'name': category_title,
                    },
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
            } catch (error) {
                throw error
            }
        },
        async fetch_category_from_api(context, id) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/category/${id}/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then((response) => {
                        context.commit('set_category_id_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }
        }
    }
}
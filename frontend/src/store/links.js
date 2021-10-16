import axios from "axios";
import {BASE_URL, AUTHORIZATION} from "@/config";

export default {
    state: {
        un_auth_links: [],
        user_categories: [],
        user_link: []
    },
    mutations: {
        set_un_auth_links_to_state: (state, links) => {
            state.un_auth_links = links
        },
        set_user_links_to_state: (state, links) => {
            state.user_categories = links
        },
        set_user_link_to_state: (state, link) => {
            state.user_link = link
        }
    },
    getters: {
        get_un_auth_links: state => state.un_auth_links,
        get_user_categories: state => state.user_categories,
        get_user_link: state => state.user_link
    },
    actions: {
        async fetch_un_auth_links_from_api({dispatch, commit, state}) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/links/`,
                })
                    .then((response) => {
                        commit('set_un_auth_links_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }
        },
        async fetch_user_links_from_api({dispatch, commit, state}) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/category/user/all/`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then((response) => {
                        commit('set_user_links_to_state', response.data)
                    })

            } catch (error) {
                throw error
            }
        },
        async fetch_user_link_from_api(context, id) {
            try {
                return await axios({
                    method: 'get',
                    url: `${BASE_URL}api/v1/link/${id}`,
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then((response) => {
                        context.commit('set_user_link_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }
        },
        async create_link({dispatch, commit}, formData) {
            try {
                return await axios({
                    method: 'post',
                    url: `${BASE_URL}api/v1/link/create/`,
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
            } catch (error) {
                throw error
            }
        },
        async update_link({dispatch, commit}, {formData, link}) {
            try {
                return await axios({
                    method: 'patch',
                    url: `${BASE_URL}api/v1/link/update/${link}`,
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Token ${localStorage.getItem('auth_token')}`
                    }
                })
            } catch (error) {
                throw error
            }
        },
        async delete_link(context, id) {
            try {
                return await axios({
                    method: 'delete',
                    url: `${BASE_URL}api/v1/link/delete/${id}`,
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
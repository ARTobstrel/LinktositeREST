import axios from "axios";

export default {
    state: {
        un_auth_links: [],
    },
    mutations: {
        set_un_auth_links_to_state: (state, links) => {
            state.un_auth_links = links
        }
    },
    getters: {
        get_un_auth_links: state => state.un_auth_links
    },
    actions: {
        async fetch_un_auth_links_from_api({dispatch, commit}) {
            try {
                return await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/v1/links/',
                })
                    .then((response) => {
                        commit('set_un_auth_links_to_state', response.data)
                    })
            } catch (error) {
                throw error
            }

        }
    }
}
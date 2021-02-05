import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import auth from "@/store/auth"
import users from "@/store/users"
import links from "@/store/links"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        version: [],
    },
    // Мутейшины меняют state
    mutations: {
        set_version_to_state: (state, version) => {
            state.version = version
        }
    },
    // Экшины делают запрос в БД и делают коммит в мутейшины
    actions: {
        async fetch_version_from_api({commit}) {
            return axios.get('http://127.0.0.1:8000/api/v1/version/last/')
                .then((response) => {
                    commit('set_version_to_state', response.data[0])
                })
        }
    },
    // геттеры порлучают инфо из state
    getters: {
        get_version: state => state.version
    },
    modules: {
        auth,
        users,
        links
    }
})


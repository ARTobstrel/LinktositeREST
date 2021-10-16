import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import auth from "@/store/auth"
import users from "@/store/users"
import links from "@/store/links"
import category from "@/store/category"
import {BASE_URL} from "@/config"
import lang from "@/store/lang";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        version: [],
        lan: 'en'
    },
    // Мутейшины меняют state
    mutations: {
        set_version_to_state: (state, version) => {
            state.version = version
        },
        set_lan_to_state: (state, lan) => {
            if (lan == 'ru') {
                state.lan = 'en'
            } else if (lan == 'en') {
                state.lan = 'ru'
            }
        }
    },
    // геттеры получают инфо из state
    getters: {
        get_version: state => state.version,
        get_base_url: state => state.BASE_URL,
        get_lan: state => state.lan,
    },
    // Экшины делают запрос в БД и делают коммит в мутейшины
    actions: {
        async fetch_version_from_api({commit, state}) {
            return axios.get(`${BASE_URL}api/v1/version/last/`)
                .then((response) => {
                    commit('set_version_to_state', response.data[0])
                })
        }
    },
    modules: {
        auth,
        users,
        links,
        category,
        lang
    }
})


import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        agentInfo: []
    },
    mutations: {
        setAgentInfo(state, data) {
            state.agentInfo = data;
        }
    },
    actions: {
        async requestAgentInfo({commit, dispatch, getters}) {
            axios.get('http://localhost:3001/agents/')
                .then(res => {
                    commit("setAgentInfo", res.data)
                }).catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        getAgentInfo: (state) => {
            return state.agentInfo
        },
        getHistoryList: (state) => {
            return state.agentInfo.map(item => item.name);
        }
    }
})

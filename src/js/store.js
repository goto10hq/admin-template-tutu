import VuexPersistence from 'vuex-persist'

export default {
    state: {
        user: null,
        working: false,
        config: null
    },
    mutations: {
        setUser (state, info) {
            state.user = info
        },
        work (state) {
            state.working = true
        },
        picnic (state) {
            state.working = false
        }
    },
    plugins: [new VuexPersistence({
        reducer: (state) => ({
            user: state.user
        })
    }).plugin]
}

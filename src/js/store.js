import VuexPersistence from 'vuex-persist'
import { EventBus } from './event-bus'

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
            EventBus.$emit('working', true)
        },
        picnic (state) {
            state.working = false
            EventBus.$emit('working', false)
        },
        fail (state) {
            state.working = false
            EventBus.$emit('working', null)
        }
    },
    plugins: [new VuexPersistence({
        reducer: (state) => ({
            user: state.user
        })
    }).plugin]
}

/* ---------- legacy stuff ---------- */

// eslint-disable-next-line no-global-assign
$ = window.jQuery = window.$ = require('jquery')

/* ------------ bootstrap ----------- */

import { dropdown, collapse } from 'bootstrap'

/* ------------- imports ------------ */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Tutu from './_tutu.vue'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import config from './config.js'

/* ------------ vuelidate ----------- */

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

/* -------------- vuex -------------- */

Vue.use(Vuex)

let bus = new Vue()

const store = new Vuex.Store({
    state: {
        user: null,
        working: false,
        bus: bus
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
    }
})

/* ------------- router ------------- */

import SignIn from './sign-in.vue'
import NotFound from './not-found.vue'

Vue.use(VueRouter)

let routes = [
    { path: config.signInUrl, component: SignIn }
]

for (let i = 0; i < config.menu.length; i++) {
    let m = config.menu[i]

    if (m.path != undefined && m.component != undefined) {
        routes.push({ name: m.name, path: m.path, component: m.component, meta: { requiresAuth: true }, params: m.params })
    }

    if (m.subs != undefined && m.subs != null && m.subs.length > 0) {
        for (let i2 = 0; i2 < m.subs.length; i2++) {
            let m2 = m.subs[i2]
            routes.push({ name: m2.name, path: m2.path, component: m2.component, meta: { requiresAuth: true }, params: m2.params })
        }
    }
}

routes.push({ path: '/', redirect: { name: config.menu[0].name, params: config.menu[0].params } })
routes.push({ path: '*', component: NotFound })


var router = new VueRouter({
    routes,
    linkActiveClass: 'active'
    //mode: 'history'
})

router.beforeEach(function (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (config.devMode) {
            if (store.state.user == null) {
                store.commit('setUser', { login: 'foo' })
            }
            next()
        }
        else {
            axios.get(config.getLoginInfoAjaxUrl + '?_=' + new Date().getTime())
                .then(function (response) {
                    store.commit('setUser', response.data)
                    store.commit('picnic')
                    if (store.state.user == null) {
                        next({ path: config.signInUrl })
                    }

                    next()
                })
                .catch(function (error) {
                    store.commit('setUser', null)
                    store.commit('picnic')
                    console.log('ERROR', error)
                    next({ path: config.signInUrl })
                })
        }
    } else {
        next()
    }
})

/* ----------- vue render ----------- */

new Vue({
    router,
    store,
    render: h => h(Tutu)
}).$mount('#app')

sync(store, router)

{/* <style lang="sass">
@import '../../src/scss/tutu.scss';
</style> */}

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Tutu from '../pages/_tutu.vue'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import SignIn from '../pages/sign-in.vue'
import NotFound from '../pages/not-found.vue'
import Store from './store'

export class Bootstrap {
    // config
    // signIn
    // notFound
    // store
    constructor (settings) {
        Vue.use(Vuelidate)
        Vue.use(Vuex)
        Vue.use(VueRouter)

        let config = settings.config
        let store = new Vuex.Store(settings.store || Store)
        store.state.config = settings.config

        let signIn = settings.signIn || SignIn
        let notFound = settings.notFound || NotFound

        let routes = [
            { path: config.signInUrl, component: signIn }
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
        routes.push({ path: '*', component: notFound })

        var router = new VueRouter({
            routes,
            linkActiveClass: 'active',
            //mode: 'history',
            scrollBehavior (to, from, savedPosition) {
                return savedPosition ? savedPosition : { x: 0, y: 0 }
            }
        })

        router.beforeEach(function (to, from, next) {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (config.devMode) {
                    if (store.state.user == null) {
                        next({ path: config.signInUrl })
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

        new Vue({
            router,
            store,
            render: h => h(Tutu)
        }).$mount(config.mountedElement)

        sync(store, router)
    }
}





/* ----------- vue render ----------- */



import '../../src/scss/tutu.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Tutu } from '../../src/js/tutu'
import Config from './config'
import CustomSignIn from '../app/custom-sign-in.vue'

$ = window.jQuery = window.$ = require('jquery')

// new Tutu({
//     config: Config
// })

new Tutu({
    config: Config,
    signIn: CustomSignIn
})


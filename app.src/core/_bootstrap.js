import '../../src/scss/tutu.scss'
import { Bootstrap } from '../../src/js/bootstrap'
import Config from './config'

$ = window.jQuery = window.$ = require('jquery')

new Bootstrap({
    config: Config
})
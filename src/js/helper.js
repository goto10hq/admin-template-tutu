import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

export default {
    data () {
        return {
            isSidebarEntire: true,
            isSidebarCollapsed: true,
            activeMenuWithSubItems: null
        }
    },
    methods: {
        selectMenuWithSubItems (name, folding) {
            if (this.activeMenuWithSubItems == name && folding) {
                this.activeMenuWithSubItems = null
            } else {
                this.activeMenuWithSubItems = name
            }
        },
        toggleSidebarWidth () {
            this.isSidebarEntire = !this.isSidebarEntire
        },
        toggleSidebarVisibility () {
            this.isSidebarCollapsed = !this.isSidebarCollapsed
        },
        scrollToError (selector) {
            selector = selector || '.errors, .error, .field-validation-error, [role="alert"]'
            Vue.nextTick(function () {
                VueScrollTo.scrollTo(selector, 500, {
                    offset: -100,
                    container: '#frame-scrollable'
                })
            })
        }
    }
}
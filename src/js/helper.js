import Vue from 'vue'

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
            var $outer = $('#frame-scrollable')

            selector = selector || '.errors, .error, [role="alert"]'

            var $errors = $outer.find(selector)

            if ($errors.length > 0) {
                Vue.nextTick(function () {
                    $outer.animate({
                        scrollTop: $outer.scrollTop() - $outer.offset().top + $errors.filter(':first').offset().top - 15
                    })
                })
            }
        }        
    }
}
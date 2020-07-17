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
        scrollToError () {
            var $outer = $('#frame-scrollable')
            var $errors = $outer.find('.errors, .error')
            if ($errors.length > 0) {
                $outer.animate({
                    scrollTop: $outer.scrollTop() - $outer.offset().top + $errors.filter(':first').offset().top - 15
                })
            }
        },
        getErrorHtml (errors) {
            if (errors == null || errors.length == 0) {
                return null
            }

            if (
                errors.hasOwnProperty('message') &&
                errors.hasOwnProperty('errors')
            ) {
                if (
                    (errors.errors == null || errors.errors.length == 0) &&
                    (errors.message == null || errors.message == '')
                ) {
                    return null
                }

                let result = ''

                if (errors.message != null && errors.message != '') {
                    result += '<strong>' + errors.message + '</strong><br />'
                }

                if (errors.errors != null && errors.errors.length != 0) {
                    result += errors.errors
                        .map(x => {
                            return x.message
                        })
                        .join('<br />')
                }

                return result
            } else if (errors.hasOwnProperty('errors')) {
                if (
                    errors.hasOwnProperty('isValid') &&
                    (errors.isValid == undefined || errors.isValid != false)
                ) {
                    return null
                }

                if (errors.errors == null || errors.errors.length == 0) {
                    return null
                }

                return errors.errors
                    .map(x => {
                        return x.value
                    })
                    .join('<br />')
            }

            return null
        }
    }
}
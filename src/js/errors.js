const getErrorHtml = function (errors) {
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

const _default = getErrorHtml

export { _default as default }

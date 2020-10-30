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
            for (let i = 0; i < errors.errors.length; i++) {
                result += errors.errors[i].message + '<br />'
            }            
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

        let result = ''

        for (let i = 0; i < errors.errors.length; i++) {
            result += errors.errors[i].value + '<br />'
        }            

        return result
    }

    return null
}

const _default = getErrorHtml

export { _default as default }

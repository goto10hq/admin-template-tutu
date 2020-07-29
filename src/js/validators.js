const email = function (value) {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$)/.test(value)
}

const _default = email

export { _default as default }
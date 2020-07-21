import Generic from '../app/generic.vue'

export default {
    // global
    devMode: true,
    mountedElement: '#app',
    // sign in            
    signInUrl: '/sign-in',
    signInAjaxUrl: '/api/sign-in',
    getLoginInfoAjaxUrl: '/api/get-login-info',
    // sign out
    signOutAjaxUrl: '/api/sign-out',
    // menu
    menu: [
        {
            icon: 'ti-dashboard',
            text: 'Dashboard',
            name: 'dashboard',
            path: '/dashboard',
            params: {},
            component: Generic
        },
        {
            icon: 'ti-alarm-clock',
            text: 'One',
            name: 'one',
            path: '/one',
            params: {},
            component: Generic
        },
        {
            icon: 'ti-gallery',
            text: 'Two',
            name: 'two',
            path: '/two',
            params: {},
            component: Generic
        },
        {
            text: 'Other options',
            name: 'other-options',
            subs: [
                {
                    icon: 'ti-car',
                    text: 'Sub One',
                    name: 'sub-one',
                    path: '/sub-one/:id?',
                    params: {},
                    component: Generic
                },
                {
                    icon: 'ti-truck',
                    text: 'Sub Two',
                    name: 'sub-two',
                    path: '/sub-two/:id?',
                    params: {},
                    component: Generic
                }
            ]
        },
        {
            text: 'Secret options',
            name: 'secret-options',
            path: '/secret-options',
            params: {},
            component: Generic,
            subs: [
                {
                    icon: 'ti-crown',
                    text: 'Sub Three',
                    name: 'sub-three',
                    path: '/sub-three/:id?',
                    params: {},
                    component: Generic
                },
                {
                    icon: 'ti-heart',
                    text: 'Sub Four',
                    name: 'sub-four',
                    path: '/sub-four/:id?',
                    params: {},
                    component: Generic
                }
            ]
        }
    ],

    /* ------------ CUSTOM ----------- */

    // mavon
    mavonToolbars: {
        bold: true,
        italic: true,
        header: true,
        ol: true,
        ul: true,
        link: true,
        fullscreen: true,
        //htmlcode: true,
        undo: true,
        redo: true,
        preview: true
    },
}


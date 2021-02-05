import Generic from '../app/generic.vue'

export default {
    // global
    devMode: true,
    mountedElement: '#app',
    title: 'TUTU',
    // sign in            
    signInTitle: 'Signing in',
    signInUrl: '/sign-in',
    signInAjaxUrl: '/api/sign-in',
    getLoginInfoAjaxUrl: '/api/get-login-info',
    login: 'Login',
    password: 'Password',
    loginRequired: 'Login is required.',
    passwordRequired: 'Password is required.',
    signInButton: 'Sign in',
    signInIcon: 'ti-user',
    // sign out
    signOutAjaxUrl: '/api/sign-out',
    // menu
    // menuHeader: {
    //     icon: 'ti-star',
    //     text: 'Menu!'
    // },
    userMenu: [
        {
            icon: 'ti-alarm-clock',
            text: 'One',
            name: 'one',
            path: '/one',
            params: {},
            component: Generic,
            roles: ['user', 'admin']
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
            icon: 'ti-gallery',
            text: 'Fake two',
            name: 'two',
            path: '/two',
            params: {},
            component: Generic,
            visible: false
        },
        {
            type: 'divider'
        },
        {
            icon: 'ti-face-sad',
            type: 'sign-out',
            text: 'Sign out!'
        }
    ],
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
            component: Generic,
            roles: ['user']
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
            icon: 'ti-gallery',
            text: 'Two (secret!)',
            name: 'two2',
            path: '/two2',
            params: {},
            component: Generic,
            roles: ['admin']
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
                    component: Generic,
                    roles: ['user']
                },
                {
                    icon: 'ti-truck',
                    text: 'Sub Two (secret!)',
                    name: 'sub-two2',
                    path: '/sub-two2/:id?',
                    params: {},
                    component: Generic,
                    roles: ['admin']
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
    // footer
    footer: [
        // {
        //     icon: 'ti-rocket',
        //     text: 'Reset',
        //     name: 'dashboard',
        //     path: '/dashboard',
        //     params: {},
        //     component: Generic
        // }
    ],
    footerToggleButton: {
        icon: '',
        text: ''
    },

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


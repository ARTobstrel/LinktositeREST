import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/views/Content')
        },
        {
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            path: '/users',
            component: () => import('@/views/Users'),

        },
        {
            path: '/createcategory',
            name: 'createcategory',
            props: true,
            component: () => import('@/views/CreateCategory')
        },
        {
            path: '/createlink',
            name: 'createlink',
            props: true,
            component: () => import('@/views/CreateLink')
        },
        {
            path: '/logout',
            component: () => import('@/views/Logout')
        },
        {
            path: '/signup',
            component: () => import('@/views/Signup')
        },
        {
            path: '/editcategory',
            name: 'editcategory',
            component: () => import('@/views/EditCategory')
        },
        {
            path: '/editlink',
            name: 'editlink',
            props: true,
            component: () => import('@/views/EditLink')
        },
        {
            path: '/updatecategory',
            name: 'updatecategory',
            props: true,
            component: () => import('@/views/UpdateCategory')
        },
        {
            path: '/createcategorylink',
            name: 'createcategorylink',
            props: true,
            component: () => import('@/views/CreateCategoryLink')
        }
    ]
})


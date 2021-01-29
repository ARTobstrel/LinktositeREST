import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/views/Content'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Content
        },
        {
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            path: '/users',
            component: () => import('@/views/Users')
        },
        {
            path: '/create_category',
            component: () => import('@/views/CreateCategory')
        },
        {
            path: '/create_link',
            component: () => import('@/views/CreateLink')
        },
        {
            path: '/logout',
            component: () => import('@/views/Logout')
        },
        {
            path: '/signup',
            component: () => import('@/views/Signup')
        }
    ]
})


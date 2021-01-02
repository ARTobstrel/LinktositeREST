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
        }
    ]
})


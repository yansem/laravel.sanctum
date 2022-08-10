import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/get', component: () => import('./components/Get'),
            name: 'main.get'
        },
        {
            path: '/user/login', component: () => import('./components/Login'),
            name: 'user.login'
        },
        {
            path: '/user/signup', component: () => import('./components/Signup'),
            name: 'user.signup'
        },
        {
            path: '/user/personal', component: () => import('./components/Personal'),
            name: 'user.personal'
        }
    ]
})

route.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.signup') {
            return next()
        } else {
            return next({name: 'user.login'})
        }
    } else {
        if (to.name === 'user.login' || to.name === 'user.signup') {
            return next({name: 'user.personal'})
        }
    }
    next()
})

export default route

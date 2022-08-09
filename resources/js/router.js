import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
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
        }
    ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//importar vistas
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }


]

const router = new VueRouter({
    routes
})

export default router
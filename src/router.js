import VueRouter from "vue-router";
import CreateShop from './pages/CreateShop.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home/index.vue'


const routes = [
    { path: '/login', component: Login},
    { path: '/createshop', component: CreateShop},

    { path: '/', component: Home}
]

export default new VueRouter({
    routes,
    mode: 'history'
})
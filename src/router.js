import VueRouter from "vue-router";
import CreateShop from './pages/CreateShop.vue'
import Login from './pages/Login.vue'

import MyShop from './pages/MyShop.vue'

import Home from './pages/Home/index.vue'
import ShopDetail from './pages/ShopDetail.vue'


const routes = [
    { path: '/login', component: Login},
    { path: '/createshop', component: CreateShop},

    { path: '/myshop', component: MyShop},

    { path: '/', component: Home},
    { path: '/shopdetail', component: ShopDetail},
]

export default new VueRouter({
    routes,
    mode: 'history'
})
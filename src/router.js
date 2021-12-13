import VueRouter from "vue-router";
import Login from './pages/Login.vue'


const routes = [
    { path: '/login', component: Login}
]

export default new VueRouter({
    routes,
    mode: 'history'
})
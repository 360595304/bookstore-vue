import VueRouter from 'vue-router'
import Login from "@/pages/Login";
import Index from "@/pages/Index";
import Vue from 'vue'
import Home from "@/pages/Home";
import Order from "@/components/Order";
import About from "@/components/About";
// const originalPush = VueRouter.prototype.push
//
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)
//
const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Index
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home',
                component: Order
            },
            {
                path: '/home/order',
                component: Order
            },
            {
                path: '/home/about',
                component: About
            }
        ]
    }

]

export default new VueRouter({
    routes
})

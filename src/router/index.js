import VueRouter from 'vue-router'
import Login from "@/pages/Login";
import Index from "@/pages/Index";
import Vue from 'vue'
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Order from "@/components/Order";
import About from "@/components/About";
import History from "@/components/History";
import UserMessage from "@/components/UserMessage";
import * as path from "path";
import Book from "@/pages/Book";
import SearchBook from "@/pages/SearchBook";
import Pay from "@/pages/Pay";
import Payment from "@/pages/Payment";
import PaySuccess from "@/pages/PaySuccess";
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
        component: Login,

    },
    {
        path: '/',
        component: Index,
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/paySuccess',
        component: PaySuccess
    },
    {
        path: '/payment',
        component: Payment
    },
    {
        path: '/search',
        component: SearchBook,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home',
                component: UserMessage
            },
            {
                path: '/home/u',
                component: UserMessage
            },
            {
                path: '/home/order',
                component: Order
            },
            {
                path: '/home/about',
                component: About
            },
            {
                path: '/home/history',
                component: History
            }
        ]
    },
    {
        path: '/book',
        component: Book
    }

]

export default new VueRouter({
    routes
})

import Vue from 'vue'
import VueRouter from 'vue-router'

// 跳转
import Home from './components/page/Home'
import PageDetail from './components/page/PaperDetail'
import BlogPage from "./components/page/BlogPage";
import NotePage from "./components/page/NotePage";
import About from "./components/page/About";

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'PageDetail',
        path: '/papers/:id',
        component: PageDetail
    },
    {
        name: 'BlogPage',
        path: '/papers',
        component: BlogPage
    },
    {
        name: 'NotePage',
        path: '/notes',
        component: NotePage
    }
    ,
    {
        name: 'About',
        path: '/about',
        component: About
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 跳转
import Home from './components/page/Home'
import PaperDetail from './components/page/PaperDetail'
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
        name: 'PaperDetail',
        path: '/papers/:id',
        component: PaperDetail
    },
    {
        name: 'BlogPage',
        path: '/blog',
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
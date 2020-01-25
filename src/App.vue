<template>
    <el-container class="outer-container">
        <el-header>
            <TopBar/>
        </el-header>
        <el-main class="view-container" >
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import Footer from "@/components/Footer"
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(ElementUI);

    export default {
        name: 'Home',
        components: {
            TopBar,
            Footer
        },
        data() {
            return {
            }
        }
    }
</script>

<style>
    body, p, h1, h2, h3, h4, h5 {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        outline: none;
    }

    a:link, a:visited, a:hover, a:active{
        text-decoration:none;
        color: inherit;
    }

    .outer-container {
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
    }

    .outer-container::-webkit-scrollbar { /* WebKit */
        height: 0;
        width: 0;
    }

    .outer-container .el-header {
        padding: 0;
    }

    .outer-container .inner-container {
        width: 1280px;
        height: 100%;
        margin: 40px auto;
    }

    .outer-container .view-container {
        min-height: 500px;
        padding: 0;
        margin-top: 60px;
    }

    .inner-container .el-main {
        margin: 0 0 0 20px;
        padding: 0;
    }

    .main-wrapper {
        border-left: 1px solid #e6e6e6;
    }

    .aside-wrapper {
        height: 100%;
    }

    div:focus {
        outline: none;
    }
    .outer-container .el-header {
        position: fixed;
        top: 0;
        z-index: 9999;
    }

    .outer-container .el-footer {
        padding: 0;
        height: 100px;
    }
</style>

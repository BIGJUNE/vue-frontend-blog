<template>
    <el-container class="outer-container">
        <el-header>
            <TopBar/>
        </el-header>
        <el-container class="inner-container">
            <el-aside width="400px" class="aside-wrapper">
                <HomeAside></HomeAside>
            </el-aside>
            <el-main class="main-wrapper">
                <HomeMain/>
            </el-main>
        </el-container>

        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import HomeMain from "./components/HomeMain";
    import HomeAside from "./components/HomeAside";

    Vue.use(ElementUI);

    export default {
        name: 'home',
        components: {
            HomeAside,
            HomeMain,
            TopBar
        }
    }
</script>

<style>
    body, p, h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
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
    }

    .outer-container .el-header {
        padding: 0;
    }

    .inner-container {
      width: 1280px;
      height: 100%;
      margin: 40px auto;
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

    div:focus{
        outline:none;
    }
</style>

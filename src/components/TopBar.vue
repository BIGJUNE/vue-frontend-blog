<template>
    <div id="top-nav">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#0593d3"
                text-color="#fff"
                active-text-color="#ffd04b">
            <p id="nav-logo">JerryGao的个人博客</p>
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="21">学习分享</el-menu-item>
            <el-menu-item index="3">日常笔记</el-menu-item>
            <el-menu-item index="4">About</el-menu-item>
            <el-menu-item index="5">如何搭建这个博客</el-menu-item>
        </el-menu>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        }
    }
</script>

<style scoped>
    #nav-logo {
        font-size: 18px;
        line-height: 61px;
        color: #fff;
        font-family: "Microsoft YaHei UI";
        float: left;
        margin: 0 110px 0 45px;
    }

    /deep/ .el-submenu__title i {
        color: #fff;
    }
</style>
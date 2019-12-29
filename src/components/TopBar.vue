<template>
    <div id="top-nav">
        <el-menu
                :default-active="activeIndex"
                class="nav-list"
                mode="horizontal"
                text-color="#000">
            <p id="nav-logo">JerryGao的个人博客</p>
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="21">学习分享</el-menu-item>
            <el-menu-item index="3">日常笔记</el-menu-item>
            <el-menu-item index="4">About</el-menu-item>
<!--            <el-menu-item index="5">如何搭建这个博客</el-menu-item>-->
            <div class="login-btn-wrapper" v-on:click="test">
                登录{{testdata}}<i class="el-icon-user el-icon--right"></i>
            </div>
            <el-input
                    placeholder="请输入搜索条件">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>

        </el-menu>
    </div>

</template>

<script>
    export default {
        name: 'TopBar',
        data() {
            return {
                activeIndex: '1',
                testdata: null,
            };
        },
        methods: {
            test : function() {
                this.$axios.get("http://yapi.demo.qunar.com/mock/37614/v1/papers")
                .then(response => (this.testdata = response))
            }
        }
    }
</script>

<style scoped>
    #nav-logo {
        font-size: 14px;
        font-weight: bold;
        line-height: 61px;
        color: #000;
        font-family: "Microsoft YaHei UI";
        float: left;
        margin-right: 50px;
    }

    #top-nav {
        width: 1280px;
        margin: 0 auto;
    }

    /deep/ .el-submenu__title i {
        color: #fff;
    }

    #top-nav .el-input {
        font-size: 14px;
        display: inline-block;
        width: 230px;
        line-height: 61px;
        float: right;
        outline: none;
    }

    #top-nav .login-btn-wrapper {
        line-height: 61px;
        float: right;
        margin: 0 20px 0 40px;
        color: #000;
        font-size: 16px;
        font-family: "PingFang SC";
        cursor: pointer;
    }

    #top-nav .login-btn-wrapper:hover {
        color: #08a4ff;
    }
</style>
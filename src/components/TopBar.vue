<template>
    <div id="top-nav">
        <el-menu
                :default-active="activeIndex"
                class="nav-list"
                mode="horizontal"
                text-color="#000">
            <p id="nav-logo">JerryGao的个人博客</p>
            <el-menu-item @click="index" index="1">首页</el-menu-item>
            <el-menu-item @click="blog" index="2">学习分享</el-menu-item>
            <el-menu-item @click="note" index="3">日常笔记</el-menu-item>
            <el-menu-item @click="about" index="4">About</el-menu-item>
            <!--            <el-menu-item index="5">如何搭建这个博客</el-menu-item>-->
<!--            <div class="login-btn-wrapper" v-on:click="test">-->
<!--                登录<i class="el-icon-user el-icon&#45;&#45;right"></i>-->
<!--            </div>-->
<!--            <el-input-->
<!--                    placeholder="请输入搜索条件">-->
<!--                <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
<!--            </el-input>-->

        </el-menu>
    </div>

</template>

<script>
    export default {
        name: 'TopBar',
        data() {
            return {
                activeIndex: '1'
            };
        },
        watch: {
            $route(to) {
                switch (to.path) {
                    case '/': this.activeIndex = '1'; break;
                    case '/blog': this.activeIndex = '2'; break;
                    case '/notes': this.activeIndex = '3'; break;
                    case '/about': this.activeIndex = '4';break;
                    default: this.activeIndex = '0';
                }
            }
        },
        created() {
            switch (this.$route.path) {
                case '/': this.activeIndex = '1'; break;
                case '/blog': this.activeIndex = '2'; break;
                case '/notes': this.activeIndex = '3'; break;
                case '/about': this.activeIndex = '4';break;
                default: this.activeIndex = '0';
            }
        },
        methods: {
            index() {
                if (this.$route.path !== '/') {
                    this.$router.push('/');
                }
            },
            blog() {
                if (this.$route.path !== '/blog') {
                    this.$router.push('/blog');
                }
            },
            note() {
                if (this.$route.path !== '/notes') {
                    this.$router.push('/notes');
                }
            },
            about() {
                if (this.$route.path !== '/about') {
                    this.$router.push('/about');
                }
            }
        }
    }
</script>

<style scoped>

    #nav-logo {
        font-size: 18px;
        font-weight: bold;
        line-height: 61px;
        color: #000;
        font-family: "Microsoft YaHei UI";
        float: left;
        padding: 0;
        margin: 0 40px;
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
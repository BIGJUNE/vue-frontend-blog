<template>
        <div>
            <el-menu  id="top-nav"
                    :default-active="activeIndex"
                    class="nav-list"
                    mode="horizontal"
                    text-color="#000">
                <p id="nav-logo">JerryGao的个人博客</p>
                <el-menu-item @click="index" index="1">首页</el-menu-item>
                <el-menu-item @click="blog" index="2">学习分享</el-menu-item>
                <el-menu-item @click="note" index="3">日常笔记</el-menu-item>
                <el-menu-item @click="about" index="4">About</el-menu-item>
                <!--            <el-menu-item index="5">管理</el-menu-item>-->
                <div class="login-btn-wrapper" @click="logDialogVisible = true">
                    登录<i class="el-icon-user el-icon--right"></i>
                </div>
                <!--            <el-input-->
                <!--                    placeholder="请输入搜索条件">-->
                <!--                <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
                <!--            </el-input>-->
            </el-menu>
            <el-dialog
                    title="登录"
                    :visible.sync="logDialogVisible"
                    :modal-append-to-body="false"
                    :close-on-click-modal="false"
                    width="30%"
                    center>
                <div class="login-body">
                    <el-input placeholder="请输入用户名" v-model="username">
                        <template slot="prepend">帐号</template>
                    </el-input>
                    <el-input placeholder="请输入密码" v-model="password" show-password class="input-password">
                        <template slot="prepend">密码</template>
                    </el-input>
                </div>
                <span slot="footer">
                    <el-button @click="logDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="login">登录</el-button>
                </span>
            </el-dialog>
        </div>
</template>

<script>
    export default {
        name: 'TopBar',
        data() {
            return {
                activeIndex: '1',
                logDialogVisible: false,
                username: '',
                password: ''
            };
        },
        watch: {
            $route(to) {
                switch (to.path) {
                    case '/':
                        this.activeIndex = '1';
                        break;
                    case '/blog':
                        this.activeIndex = '2';
                        break;
                    case '/notes':
                        this.activeIndex = '3';
                        break;
                    case '/about':
                        this.activeIndex = '4';
                        break;
                    default:
                        this.activeIndex = '0';
                }
            }
        },
        created() {
            switch (this.$route.path) {
                case '/':
                    this.activeIndex = '1';
                    break;
                case '/blog':
                    this.activeIndex = '2';
                    break;
                case '/notes':
                    this.activeIndex = '3';
                    break;
                case '/about':
                    this.activeIndex = '4';
                    break;
                default:
                    this.activeIndex = '0';
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
            },
            login() {
                if (this.username.trim().length === 0) {
                    alert("帐号不能为空");
                    return;
                }
                if (this.password.trim().length === 0) {
                    alert("密码不能为空");
                    return;
                }
                this.$axios.post("/v1/user/login", {
                    username: this.username,
                    password: this.password
                }).then(response => {
                    if (response.data.code === 0) {
                        alert('登录成功')
                    } else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("服务器错误:" + error)
                })
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

    .login-body {
        height: 100px;
        text-align: center;
    }
    .login-body .el-input {
        width: 350px;
    }
    .login-body .input-password {
        margin-top: 25px;
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
<template>
    <el-container class="inner-container">
            <el-aside width="400px" class="aside-wrapper">
                <HomeAside v-bind:note_list="note_list"></HomeAside>
            </el-aside>
            <el-main class="main-wrapper">
                <HomeMain v-bind:paper_list="paper_list"/>
            </el-main>
    </el-container>

</template>

<script>
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import HomeMain from "../HomeMain";
    import HomeAside from "../HomeAside";

    Vue.use(ElementUI);

    export default {
        name: 'Home',
        components: {
            HomeAside,
            HomeMain,
        },
        data() {
            return {
                paper_list: [],
                note_list: []
            };
        },
        created: function() {
            this.$axios.get("/v1/home")
                .then( response => {
                    let result = response.data;
                    this.paper_list = result.data.blog_list;
                    this.note_list = result.data.note_list;
                });

        }
    }
</script>

<style>
    .outer-container .el-header {
        padding: 0;
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

<template>
    <div class="note-card-wrapper">
        <el-card class="note-card">
            <div slot="header" class="clearfix">
                <span class="panel-title">学习笔记</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
            </div>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
            <a href="#">
                <div class="note-item">
                    <b>Docker环境下运行SpringBoot项目</b>
                </div>
            </a>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "NoteCard"
    }
</script>

<style scoped>
    .note-card {
        height: 325px;
        max-height: 325px;
    }
    .note-card .note-item {
        font-size: 16px;
        margin-bottom: 18px;
        font-weight: normal;
    }

    .panel-title {
        font-weight: normal;
        font-size: 16px;
        padding-left: 5px;
        border-left: 5px solid #3a8ee6;
    }

    .note-card a:hover {
        color: #3a8ee6;
    }

    .clearfix:before, .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>
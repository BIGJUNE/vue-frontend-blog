<template>
    <div class="comment-card-wrapper">
        <el-card class="comment-card"
                 >
            <div slot="header" class="clearfix">
                <span class="panel-title">最新评论</span>
            </div>
            <div v-loading="true"
                    element-loading-text="敬请期待"
                  element-loading-spinner="el-icon-warning">
                <div class="comment-item">
                    <h4>还在开发。。。</h4>
                    <p>评论功能还在开发中，敬请期待</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>还在开发。。。</h4>
                    <p>评论功能还在开发中，敬请期待</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>还在开发。。。</h4>
                    <p>评论功能还在开发中，敬请期待</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>还在开发。。。</h4>
                    <p>评论功能还在开发中，敬请期待</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "CommentCard"
    }
</script>

<style>
    .comment-card {
        margin-top: 50px;
    }

    .comment-card .comment-item {
        font-size: 14px;
        margin-bottom: 18px;
        font-weight: normal;
    }

    .comment-card .el-loading-mask {
        height: 440px;
    }

    .panel-title {
        font-weight: normal;
        font-size: 16px;
        padding-left: 5px;
        border-left: 5px solid #3a8ee6;
    }

    .comment-item h4 {
        font-size: 16px;
        font-weight: normal;
    }

    .comment-item p {
        margin-top: 5px;
        font-size: 14px;
        color: #a6a6a6;
        font-weight: lighter;
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
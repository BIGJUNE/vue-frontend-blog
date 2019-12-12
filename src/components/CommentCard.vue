<template>
    <div class="comment-card-wrapper">
        <el-card class="comment-card">
            <div slot="header" class="clearfix">
                <span class="panel-title">最新评论</span>
            </div>
            <a href="#">
                <div class="comment-item">
                    <h4>测试一下评论</h4>
                    <p>这是一个真实的品论，哈哈哈其实不是啦。.asd</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>测试一下评论</h4>
                    <p>这是一个真实的品论，哈哈哈其实不是啦。.asd</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>测试一下评论</h4>
                    <p>这是一个真实的品论，哈哈哈其实不是啦。.asd</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
                <div class="comment-item">
                    <h4>测试一下评论</h4>
                    <p>这是一个真实的品论，哈哈哈其实不是啦。.asd</p>
                    <el-divider><i class="el-icon-chat-line-square"/></el-divider>
                </div>
            </a>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "CommentCard"
    }
</script>

<style scoped>
    .comment-card {
        margin-top: 50px;
    }
    .comment-card .comment-item {
        font-size: 14px;
        margin-bottom: 18px;
        font-weight: normal;
    }

    .panel-title {
        font-weight: normal;
        font-size: 16px;
        padding-left: 5px;
        border-left: 5px solid #3a8ee6;
    }

    .comment-card .comment-item {

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
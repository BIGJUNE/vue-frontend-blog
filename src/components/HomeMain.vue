<template>
    <div class="middle-panel">
        <el-row class="title-row">
            <el-col :span="24">
                <b class="panel-title">学习分享</b>
                <el-button class="more-btn" v-on:click="$router.push('/blog')">More</el-button>
            </el-col>
        </el-row>
        <div class="share-paper-wrapper">
            <el-timeline v-for="(paper,index) in paper_list" :key="index">
                <TimeLineItem v-bind:timestamp="paper.create_time"
                              v-if="index < CURRENT_PAPER_MAX_AMOUNT"
                              v-bind:summary="paper.summary"
                              v-bind:tag_list="paper.tag_list"
                              v-bind:comment_count="paper.comment_count"
                              v-bind:read_count="paper.read_count"
                              v-bind:title="paper.title"
                              v-bind:paper_type="paper.paper_type"
                              v-bind:id="paper.id"/>
            </el-timeline>
        </div>
    </div>

</template>

<script>
    import TimeLineItem from "@/components/TimeLineItem"

    export default {
        name: "HomeMain",
        components: {
            TimeLineItem
        },
        data() {
            return {
                CURRENT_PAPER_MAX_AMOUNT: this.GLOBAL.CURRENT_PAPER_MAX_AMOUNT,
            };
        },
        props: {
            paper_list: Array
        }
    }
</script>

<style>
    .middle-panel {
        width: 839px;
        margin: 0;
        padding: 0;
    }

    .middle-panel .el-divider {
        margin: 12px auto;
    }

    .middle-panel .share-paper-wrapper {
        margin-top: 25px;
    }

    .paper-wrapper .paper-attr {
        margin-top: 15px;
    }

    .paper-attr .tag {
        color: #a9a9a9;
    }

    .paper-attr .view-span {
        margin-left: 10px;
    }

    .paper-attr .view-and-comment {
        color: #656464;
        font-size: 14px;
    }

    .paper-wrapper .el-tag {
        height: 20px;
        line-height: 20px;
        margin-right: 2px;
        padding: 0 5px;
    }

    .paper-card .el-card__body{
        padding-bottom: 10px;
    }

    .paper-wrapper .paper-summary {
        color: #5f5f5f;
    }

    .middle-panel .title-row {
        margin-left: 44px;
    }

    .panel-title {
        font-weight: normal;
        font-size: 16px;
        padding-left: 5px;
        border-left: 5px solid #3a8ee6;
    }
    .more-btn {
        font-size: 12px;
        padding: 3px 8px;
        margin-left: 8px;
        font-weight: lighter;
        color: #a6a6a6;
        font-family: Consolas,serif;
        cursor: pointer;
    }
    .more-btn:hover {
        background-color: #3a8ee6;
        color: #fff;
    }
</style>
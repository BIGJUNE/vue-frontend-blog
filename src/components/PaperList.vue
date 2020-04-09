<template>
    <div class="share-paper-wrapper">
        <el-timeline v-for="(paper,index) in paper_list" :key="index">
            <TimeLineItem v-bind:timestamp="paper.create_time"
                          v-bind:summary="paper.summary"
                          v-bind:tag_list="paper.tag_list"
                          v-bind:comment_count="paper.comment_count"
                          v-bind:read_count="paper.read_count"
                          v-bind:title="paper.title"
                          v-bind:id="paper.id"
                          v-bind:paper_type="paper_type"/>
        </el-timeline>
    </div>

</template>

<script>
    import TimeLineItem from "./TimeLineItem"

    export default {
        name: "PaperList",
        components: {
            TimeLineItem
        },
        props: {
            paper_list: Array,
            paper_type: String
        }
    }
</script>

<style>
    .middle-panel .el-divider {
        margin: 12px auto;
    }

    .share-paper-wrapper {
        margin-top: 25px;
        width: 100%;
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

    .paper-card .el-card__body {
        padding-bottom: 10px;
    }

    .paper-wrapper .paper-summary {
        color: #5f5f5f;
    }

</style>
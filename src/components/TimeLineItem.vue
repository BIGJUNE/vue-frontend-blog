<template>
    <el-timeline-item class="paper-wrapper" v-bind:timestamp="timestamp" placement="top">
        <a href="#">
            <el-card class="paper-card" shadow="hover">
                <h4 class="paper-title">{{ title}}</h4>
                <p class="paper-summary">{{ summary }}</p>
                <el-row class="paper-attr">
                    <el-col :span="16">
                        <label class="tag">标签：</label>
                        <span  v-for="tag in tag_list" :key="tag">
                            <el-tag >{{ tag }}</el-tag>
                        </span>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="comment-span"><i class="el-icon-s-comment" />{{ comment_count }}</span>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="view-span"><i class="el-icon-view" />{{ read_count }}</span>
                    </el-col>
                </el-row>
            </el-card>
        </a>
    </el-timeline-item>
</template>

<script>
    export default {
        name: "TimeLineItem",
        data() {
            return {};
        },
        props: {
            timestamp: String,
            summary: String,
            tag_list: Array,
            comment_count: Number,
            read_count: Number
        }
    }
</script>

<style scoped>

</style>
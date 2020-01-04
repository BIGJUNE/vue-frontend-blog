<template>
    <el-timeline-item class="paper-wrapper" v-bind:timestamp="timestamp" placement="top">
        <router-link :to="'/papers/' + id">
            <el-card class="paper-card" shadow="hover">
                <h4 class="paper-title">{{ title }}</h4>
                <p class="paper-summary">{{ summary }}</p>
                <el-row class="paper-attr">
                    <el-col :span="16">
                        <label class="tag">标签：</label>
                        <span v-for="(tag,index) in tag_list" :key="index">

                            <el-tag v-if="index < TAG_MAX_AMOUNT">{{ tag }}</el-tag>
                        </span>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="comment-span"><i class="el-icon-s-comment"/>{{ comment_count }}</span>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="view-span"><i class="el-icon-view"/>{{ read_count }}</span>
                    </el-col>
                </el-row>
            </el-card>
        </router-link>
    </el-timeline-item>
</template>

<script>
    export default {
        name: "TimeLineItem",
        data() {
            return {
                TAG_MAX_AMOUNT: this.GLOBAL.TAG_MAX_AMOUNT
            };
        },
        props: {
            timestamp: String,
            title: String,
            summary: String,
            tag_list: Array,
            comment_count: Number,
            read_count: Number,
            id: Number
        }
    }
</script>

<style scoped>

</style>
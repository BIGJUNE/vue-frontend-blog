<template>
    <el-timeline-item class="paper-wrapper" timestamp="2018/4/3" placement="top">
        <a href="#">
            <el-card class="paper-card" shadow="hover">
                <h4 class="paper-title">更新 Github 模板</h4>
                <p class="paper-summary">两行两行两行两行两行两行两行两行两行两行两行两行两行两行两行两行行两行两行两行两行两行两行两行两行两行...</p>
                <el-row class="paper-attr">
                    <el-col :span="16">
                        <label class="tag">标签：</label>
                        <el-tag>Java</el-tag>
                        <el-tag>SpringBoot</el-tag>
                        <el-tag>测试长度</el-tag>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="comment-span"><i class="el-icon-s-comment" />(0)</span>
                    </el-col>
                    <el-col class="view-and-comment" :span="4">
                        <span class="view-span"><i class="el-icon-view" />(0)</span>
                    </el-col>
                </el-row>
            </el-card>
        </a>
    </el-timeline-item>
</template>

<script>
    export default {
        name: "TimeLineItem"
    }
</script>

<style scoped>

</style>
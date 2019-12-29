<template>
    <div class="note-card-wrapper">
        <el-card class="note-card">
            <div slot="header" class="clearfix">
                <span class="panel-title">学习笔记</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
            </div>
            <span v-for="(note, index) in note_list" :key="index">
            <a href="#">
                <div class="note-item">
                    <b class="note-title">{{ note.title }}</b>
                    <span v-for="(tag, index) in note.tag_list" :key="index">
                        <el-tag class="note-tag">{{ tag }}</el-tag>
                    </span>
                </div>
            </a>
            </span>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "NoteCard",
        props: {
            note_list: Array
        }
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

    .note-item .note-title {
        font-weight: normal;
        font-size: 16px;
    }

    .note-item .note-tag {
        height: 25px;
        line-height: 25px;
        margin-left: 5px;
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
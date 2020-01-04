<template>
    <div class="paper-detail-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="paper-detail-wrapper">
            <div slot="header" class="title-wrapper">
                <div class="paper-title">{{paper.title}}</div>
                <el-row class="paper-attr">
                    <el-col class="text-attr" :span="4">
                        最后编辑于{{paper.update_time == null ? paper.create_time : paper.update_time}}
                    </el-col>
                    <el-col class="text-attr" :span="2">
                        阅读数：{{ paper.read_count }}
                    </el-col>
                    <el-col class="text-attr" :span="18">
                        标签：
                        <span v-for="(tag,index) in paper.tag_list" :key="index">
                            <el-tag>{{ tag }}</el-tag>
                        </span>
                    </el-col>
                </el-row>
            </div>
            <div class="text-wrapper" v-html="html_text"></div>
        </el-card>
    </div>
</template>

<script>
    let marked = require('marked');
    let hljs = require('highlight.js');
    import 'highlight.js/styles/atom-one-dark.css';

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    export default {
        components: {},
        name: "PaperDetail",
        data() {
            return {
                html: ' ',
                id: '',
                html_text: '',
                paper: {}
            }
        },
        created: function () {

            this.id = this.$route.params.id;
            this.$axios.get("/v1/papers/" + this.id)
                .then(response => {
                    this.paper = response.data.data;
                    this.html_text = marked(this.paper.text).replace(/<pre>/g, '<pre class="hljs">');
                });
        }
    }
</script>

<style scoped>

    .paper-detail-container {
        margin-top: 20px;
    }

    .paper-detail-wrapper {
        margin-top: 20px;
    }

    .paper-detail-wrapper .paper-title {
        font-weight: bolder;
        padding-top: 15px;
        height: 55px;
        font-size: 32px;
    }
    .paper-title .paper-attr {
        margin-top: 8px;
    }
    .paper-attr .el-tag {
        height: 26px;
        line-height: 26px;
        margin-right: 5px;
        color: #ca0c16;
        background-color: #f9ecec;
        border-color: #f9ecec;
    }
    .paper-attr .text-attr {
        font-size: 12px;
        color: #656464;
        line-height: 32px;
    }
</style>
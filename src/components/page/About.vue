<template>
    <div>
        <div class="text-wrapper" v-html="html_text"></div>
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
        name: "About",
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
            this.$axios.get("/v1/papers/-1")
                .then(response => {
                    this.paper = response.data.data;
                    this.html_text = marked(this.paper.text).replace(/<pre>/g, '<pre class="hljs">');
                });
        }
    }
</script>

<style scoped>

</style>
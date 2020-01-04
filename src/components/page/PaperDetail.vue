<template>
    <el-container>
        <h1 class="paper-detail-title">{{paper.title}}</h1>
        <mavon-editor
                v-model="paper.text"
                ref="md"
                @change="change"
                style="min-height: 600px"
        />
    </el-container>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        components: {
            mavonEditor
        },
        name: "PaperDetail",
        data() {
            return {
                html: ' ',
                id: '1',
                paper: ''
            }
        },
        methods: {
            change(value, render) {
                this.html = render
            }
        },
        $watch : function () {
            this.$axios.get("/v1/papers/" + this.$router.params['id'])
                .then(response => {
                    let result = response.data;
                    this.paper = result.data;
                });

        }
    }
</script>

<style scoped>

</style>
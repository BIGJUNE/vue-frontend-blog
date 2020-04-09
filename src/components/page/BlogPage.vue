<template>
    <el-container class="paper-list-container">
        <PaperList v-bind:paper_list="paper_list" :paper_type="paper_type"></PaperList>
    </el-container>
</template>

<script>
    import PaperList from "../PaperList";

    export default {
        name: "BlogPage",
        components: {
            PaperList
        },
        data() {
            return {
                paper_list: [],
                paper_type: 'blog'
            }
        },
        created: function () {
            this.$axios.get("/v1/papers?paper_type=1")
                .then(response => {
                    let result = response.data;
                    this.paper_list = result.data.list;
                });

        }
    }
</script>

<style scoped>
    .paper-list-container {
        width: 100%;
        margin-top: 5px;
    }
</style>
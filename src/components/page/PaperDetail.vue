<template>
    <div>
        <mavon-editor
            v-model="content"
            ref="md"
            @change="change"
            style="min-height: 600px"
        />
    </div>
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
                content: ' ',
                html: ' '
            }
        },
        methods: {
            change(value, render) {
                this.html = render
            }
        }
    }
</script>

<style scoped>

</style>
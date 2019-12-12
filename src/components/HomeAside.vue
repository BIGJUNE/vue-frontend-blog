<template>
    <div class="home-aside">
        <NoteCard></NoteCard>
        <CommentCard></CommentCard>
    </div>
</template>

<script>
    import NoteCard from "./NoteCard";
    import CommentCard from "./CommentCard";
    export default {
        name: "HomeAside",
        components: {CommentCard, NoteCard}
    }
</script>

<style scoped>
    .note-card {
        height: 300px;
        max-height: 300px;
    }
    .note-card .note-item {
        font-size: 16px;
        margin-bottom: 18px;
        font-weight: normal;
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
    .box-card {

    }
</style>
<template>
    <div class="delete-item">
        <div>{{deleteData}}</div>
        <div class="icon-trash delete-item-icon"></div>
    </div>
</template>

<script>
    export default {
        name: "DeleteItem",
        props: ["deleteData"]
    }
</script>

<style scoped>
    .delete-item {
        display: flex;
        background: #EFEFEF;
        padding: 2px 5px;
        margin-left: 10px;
        align-items: center;
    }

    .delete-item-icon {
        margin-left: 5px;
        font-size: 16px;
    }
</style>

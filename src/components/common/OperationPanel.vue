<template>
    <div class="operation-content">
        <div class="operation-title">{{operationData.title}}</div>
        <div class="icon-cog operation-icon"></div>
        <div class="operation-num">{{operationData.num}}</div>
    </div>
</template>

<script>
    export default {
        name: "OperationPanel",
        props: ["operationData"]
    }
</script>

<style scoped>
    .operation-content {
        margin-left: 10px;
        background: #ffffff;
        position: relative;
    }

    .operation-icon {
        font-size: 144px;
        animation: changeRota 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

    }

    @keyframes changeRota {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .operation-title {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .operation-num {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>

<template>
    <div class="operation-content" :style="{background: operationData.backgroundColor}">
        <div class="operation-title">{{operationData.title}}</div>
        <div class="operation-icon" :class="[operationData.background, {'operation-icon-animation' : operationData.isTransform}]"></div>
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
        position: relative;
        font-size: 48px;
    }

    .operation-icon {
        font-size: 144px;
        opacity: 0.2;
    }

    .operation-icon-animation {
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
        font-size: 18px;
        font-weight: bold;
    }

    .operation-num {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>

<template>
    <div>
        <div class="operation-content" :style="{background: operationData.backgroundColor}">
            <div v-if="operationLength != index + 1">
                <div class="operation-title">{{operationData.title}}</div>
                <div class="operation-icon" :class="[operationData.background, {'operation-icon-animation' : operationData.isTransform}]"></div>
                <div class="operation-num">{{operationData.num}}</div>
            </div>
            <div v-else class="operation-count">
                <div class="operation-count-content" v-for="(item ,index) of getOperationCount" :key="index">
                    <div class="operation-count-title">
                        {{item.title}}
                    </div>
                    <div class="operation-count-num">
                        {{item.num}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "OperationPanel",
        props: ["operationData", "operationLength", "index"],
        computed: {
            ...mapGetters(["getAgentInfo", "getTypeNum"]),

            getOperationCount() {
                return  [
                    {
                        title: "ALL",
                        num: this.getAgentInfo.length
                    },
                    {
                        title: "physical",
                        num: this.getTypeNum("physical")
                    },
                    {
                        title: "virtual",
                        num: this.getTypeNum("virtual")
                    }
                ];

            }
        },
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

    .operation-count {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .operation-count-content {
        padding: 10px;
    }

    .operation-count-title {
        font-size: 12px;
    }
    .operation-count-num {
        font-size: 20px;
    }
</style>

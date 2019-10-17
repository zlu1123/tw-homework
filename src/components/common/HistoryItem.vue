<template>
    <div class="history-item-info">
        <div class="history-item-title">History</div>
        <li v-for="(item, index) of historyList" :key="index" class="history-item-content ellipsis_1">
            <span >bjstdmngbdr0{{index}}.thoughtworks.com111111111111</span>
        </li>
    </div>
</template>

<script>
    export default {
        name: "HistoryItem",
        data() {
            return {
                historyList: [0,1,2,3,4,5,6,7]
            }
        }
    }
</script>

<style scoped>
    .history-item-title {
        font-size: 24px;
        color: #cccccc;
        text-align: left;
    }

    .history-item-info {

    }

    .history-item-content span {
        font-size: 12px;
        color: #999999;
    }
</style>

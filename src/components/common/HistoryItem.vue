<template>
    <div class="history-item-info">
        <div class="history-item-title">History</div>
        <div v-for="(item, index) of this.getHistoryList" :key="index" class="history-item-content">
            <div class="history-item-marker"></div>
            <span class="ellipsis_1">{{item}}</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "HistoryItem",
        computed: {
            ...mapGetters(["getHistoryList"])
        }
    }
</script>

<style scoped>
    .history-item-title {
        font-size: 24px;
        color: #cccccc;
        text-align: left;
    }

    .history-item-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .history-item-content span {
        margin-left: 10px;
        font-size: 12px;
        color: #999999;
    }

    .history-item-content span:hover {
        color: #00B4CF;
    }

    .history-item-marker {
        width: 2px;
        height: 2px;
        border: 1px solid #999999;
        border-radius: 100px;
        background-color: #999999;
        opacity: 0.5;
    }
</style>

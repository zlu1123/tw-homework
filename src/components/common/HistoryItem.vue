<template>
    <div class="history-item-info">
        <div class="history-item-title">History</div>
        <li v-for="(item, index) of this.getHistoryList" :key="index" class="history-item-content ellipsis_1">
            <span>{{item}}</span>
        </li>
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

    .history-item-info {

    }

    .history-item-content span {
        font-size: 12px;
        color: #999999;
    }
</style>

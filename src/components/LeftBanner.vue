<template>
    <div>
        <div class="left-content">
            <div class="func-item">
                <banner-item></banner-item>
            </div>
            <div class="history-item">
                <history-item></history-item>
            </div>
        </div>
    </div>
</template>

<script>
    import BannerItem from "./common/BannerItem";
    import HistoryItem from "./common/HistoryItem";

    export default {
        name: "LeftBanner",
        components: {
            bannerItem: BannerItem,
            historyItem: HistoryItem
        }
    }
</script>

<style scoped>
    .left-content {
        background: #435466;
        height: 100%;
        width: 20%;
        position: fixed;
        top:0;
    }

    .func-item {
        padding: 0 30px;
    }

    .history-item {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 10px 20px;
        box-sizing: border-box;
    }
</style>

<template>
    <div class="search-content">
        <div>
            <search-content></search-content>
        </div>
        <div class="search-content-list">
            <div class="icon-th-card"></div>
            <div class="icon-th-list choose-item"></div>
        </div>
    </div>
</template>

<script>
    import SearchContent from "./SearchContent"
    export default {
        name: "Search",
        components: {
            searchContent: SearchContent
        }
    }
</script>

<style scoped>
    .search-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
    }

    .search-content-list {
        display: flex;
    }

    .search-content-list div{
        margin-left: 20px;
    }

    .choose-item {
        color: #00B4CF;
    }

</style>
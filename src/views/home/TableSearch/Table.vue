<template>
    <div class="table-cotent-display">
        <div class="table-cotent" v-for="(item, index) of tableList" :key="index" :class="{'border-bottom': item.activeIndex }">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: {
            tableList: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
    .table-cotent-display {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .table-cotent {
        flex: 1;
        border-right: 1px solid #E1E4E6;
        height: 50px;
        line-height: 50px;
    }

    .border-bottom {
        border-bottom: 2px solid #00B4CF;
    }
</style>
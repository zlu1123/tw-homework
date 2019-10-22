<template>
    <div>
        <div class="work-content">
            <div class="operation-just">
                <operation-panel class="operation-panel-content" v-for="(item, index) of contentList" :key="index" :operation-data="item" :index="index" :operation-length="contentList.length"></operation-panel>
            </div>
            <div class="table-search">
                <table-search></table-search>
            </div>
            <div>
                <cruise-content></cruise-content>
            </div>
        </div>
    </div>
</template>

<script>
    import OperationPanel from "../../components/common/OperationPanel";
    import TableSearch from "./TableSeacrh"
    import CruiseContent from "./CruiseContent"
    export default {
        name: "HomeWorkContent",
        components: {
            operationPanel: OperationPanel,
            tableSearch: TableSearch,
            CruiseContent
        },
        data() {
            return {
                contentList:[
                    {
                        title: "Building",
                        num: 3,
                        backgroundColor: "#FF9A2A",
                        background: "icon-cog",
                        isTransform: true
                    },
                    {
                        title: "idle",
                        num: 5,
                        backgroundColor: "#7FBC39",
                        background: "icon-coffee",
                        isTransform: false
                    },
                    {
                        title: "error",
                        num: 10,
                        backgroundColor: "#FFFFFF"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .work-content {
        margin: 10px 0;
    }

    .operation-just{
        display: flex;
    }

    .operation-panel-content {
        flex: 1;
        flex-wrap: wrap;
    }

    .table-search {
        margin: 10px;
    }
</style>

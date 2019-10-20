<template>
    <div class="table-search-content">
        <div>
            <content-table :table-list="tableList"></content-table>
        </div>
        <div>
            <contentSearch></contentSearch>
        </div>
    </div>
</template>

<script>
    import Table from "./TableSearch/Table"
    import Search from "./TableSearch/Search"

    export default {
        name: "TableSeacrh",
        components: {
            contentTable: Table,
            contentSearch: Search
        },
        data() {
            return {
                tableList: [
                    {
                        name: "All",
                        activeIndex: true
                    },
                    {
                        name: "Physical",
                        activeIndex: false
                    },
                    {
                        name: "Virtual",
                        activeIndex: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .table-search-content {
        display: flex;
        align-items: center;
        height: 50px;
        background: #ffffff;
    }

    .table-search-content >div:first-child{
        flex: 1;
    }

    .table-search-content >div:last-child{
        flex: 2;
    }
</style>
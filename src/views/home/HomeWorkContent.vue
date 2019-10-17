<template>
    <div>
        <div class="work-content">
            <div class="operation-just">
                <operation-panel class="operation-panel-content" v-for="(item, index) of contentList" :key="index" :operation-data="item"></operation-panel>
            </div>
        </div>
    </div>
</template>

<script>
    import OperationPanel from "../../components/common/OperationPanel";
    export default {
        name: "HomeWorkContent",
        components: {
            operationPanel: OperationPanel
        },
        data() {
            return {
                contentList:[
                    {
                        title: "Building",
                        num: 3
                    },
                    {
                        title: "idle",
                        num: 5
                    },
                    {
                        title: "error",
                        num: 10
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
        width: 33%;
        flex: 1;
    }
</style>

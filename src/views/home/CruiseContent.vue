<template>
    <div>
        <cruise-item v-for="(item, index) in this.getAgentInfo" ref="curiseItem" :curiseData="item" :key="index" @addPopClick="addPopClick(index)"></cruise-item>
    </div>
</template>

<script>
    import CruiseItem from "./Cruise/CruiseItem";
    import {mapGetters} from "vuex"
    export default {
        name: "CruiseContent",
        components: {
            cruiseItem: CruiseItem
        },
        methods: {
            addPopClick(index) {
                const that = this;
                for(let i = 0; i < that.getAgentInfo.length; i++) {
                    if(i != index) {
                        that.$refs.curiseItem[i].popShowFlag = false;
                    }
                }
            }
        },
        computed: {
            ...mapGetters(["getAgentInfo"])
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <cruise-item v-for="(item, index) of this.getAgentInfo" :curiseData="item" :key="index"></cruise-item>
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
        computed: {
            ...mapGetters(["getAgentInfo"])
        }
    }
</script>

<style scoped>

</style>

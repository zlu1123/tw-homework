<template>
    <div>
        <cruise-item v-for="(item, index) of cruiseList" :key="index"></cruise-item>
    </div>
</template>

<script>
    import CruiseItem from "./Cruise/CruiseItem"
    export default {
        name: "CruiseContent",
        components: {
            cruiseItem: CruiseItem
        },
        data() {
            return {
                cruiseList: [0,1,2,3]
            }
        }
    }
</script>

<style scoped>

</style>
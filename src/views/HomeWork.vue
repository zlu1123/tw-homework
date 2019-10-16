<template>
    <div>
        <home-work-header></home-work-header>
        <home-work-left></home-work-left>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import LeftBanner from "../components/LeftBanner";
    export default {
        name: "HomeWork",
        components: {
            homeWorkHeader: Header,
            homeWorkLeft: LeftBanner
        }
    }
</script>

<style scoped>

</style>

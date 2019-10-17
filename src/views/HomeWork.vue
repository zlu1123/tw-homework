<template>
    <div>
        <home-work-header></home-work-header>
        <div class="home-content">
            <home-work-left></home-work-left>
            <home-work-content class="home-work-content"></home-work-content>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import LeftBanner from "../components/LeftBanner";
    import HomeWorkContent from "./home/HomeWorkContent";

    export default {
        name: "HomeWork",
        components: {
            homeWorkHeader: Header,
            homeWorkLeft: LeftBanner,
            homeWorkContent: HomeWorkContent
        }
    }
</script>

<style scoped>
    .home-content {

    }

    .home-work-content {
        position: fixed;
        left: 20%;
        right: 0;
    }
</style>

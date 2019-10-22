<template>
    <div>
        <div v-for="(item, index) of bannerList" :key="index" class="item-content" :class="{'item-choose-color': item.currentChoose}">
            <i :class="item.imgPath"></i>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerItem",
        data() {
            return {
                bannerList: [
                    {
                        imgPath: "icon-dashboard",
                        text: "DASHBOARD",
                        currentChoose: false
                    },
                    {
                        imgPath: "icon-sitemap",
                        text: "AGENT",
                        currentChoose: true
                    },
                    {
                        imgPath: "icon-life-bouy",
                        text: "MY CRUISE",
                        currentChoose: false
                    },
                    {
                        imgPath: "icon-boat",
                        text: "HELP",
                        currentChoose: false
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .item-content {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #ffffff;
    }

    .item-content span {
        margin-left: 20px;
        font-size: 14px;
    }

    .item-choose-color {
        color: #00B4CF;
    }
</style>

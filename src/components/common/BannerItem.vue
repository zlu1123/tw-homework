<template>
    <div>
        <div v-for="(item, index) of bannerList" :key="index" class="item-content">
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
                        text: "DASHBOARD"
                    },
                    {
                        imgPath: "icon-sitemap",
                        text: "AGENT"
                    },
                    {
                        imgPath: "icon-life-bouy",
                        text: "MY CRUISE"
                    },
                    {
                        imgPath: "icon-boat",
                        text: "HELP"
                    },
                ]
            }
        },
        props: {

        }
    }
</script>

<style scoped>
    .item-content {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

    }

    .item-content span {
        margin-left: 20px;
        color: #ffffff;
        font-size: 14px;
    }

    .item-content i{
        color: #ffffff;
    }
</style>

<template>
    <div class="header-parent">
        <div class="header-content">
            <div>
                <img class="header-content-img" src="../../public/img/homework/logo/logo.svg" alt="">
            </div>
            <div>
                <img class="header-content-img" src="../../public/img/homework/logo/logo.svg" alt="">
            </div>
            <div>
                <img class="header-user-img" src="../../public/img/homework/logo/avatar.jpg" alt=""
                     @click.stop="showLogin">
                <i class="icon-angle-down header-user"></i>
            </div>
        </div>
        <div v-if="signOutFlag" class="header-sign">
            <div class="header-sign-content" v-for="(item, index) of headerList" :key="index">
                <div :class="item.iconUrl"></div>
                <span>{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                signOutFlag: false,
                headerList: [
                    {
                        iconUrl: "icon-id-card",
                        text: "Profile"
                    },
                    {
                        iconUrl: "icon-sign-in",
                        text: "Sign Out"
                    }
                ]
            }
        },
        methods: {
            showLogin() {
                this.signOutFlag ? this.signOutFlag = false : this.signOutFlag = true;
            }
        }
    }
</script>

<style scoped>
    .header-parent {
        position: relative;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        padding: 10px 40px;
        background: #ffffff;
    }

    .header-content > div img {
        height: 40px;
    }

    .header-content > div:first-child {
        flex: 1;
        text-align: left;
    }

    .header-content > div:nth-child(2n) {
        flex: 2;
    }

    .header-content > div:last-child {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .header-user {
        margin-left: 5px;
    }

    .header-right {
        display: inline-block;
        line-height: 40px;
        height: 40px;
    }

    .header-sign {
        position: absolute;
        right: 20px;
        z-index: 1;
    }

    .header-sign-content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 30px;
        background: #EFEFEF;
        font-size: 12px;
        padding-left: 10px;
    }

    .header-sign-content span {
        margin-left: 5px;
    }
</style>

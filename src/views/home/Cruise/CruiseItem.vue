<template>
    <div class="cruise-item">
        <div class="cruise-item-img">
            <img :src="`${imgHeader}img/homework/os-icons/${curiseData.os}.png`" alt="">
        </div>
        <div class="cruise-item-content">
            <div class="cruise-content-title">
                <div class="icon-desktop content-title">
                </div>
                <div class="content-ip">
                    {{curiseData.name}}
                </div>
                <div class="content-status" :class="'color_' + curiseData.status">
                    {{curiseData.status}}
                </div>
                <div class="icon-info content-title"></div>
                <div>{{curiseData.ip}}</div>
                <div class="icon-folder content-title"></div>
                <div>{{curiseData.location}}</div>
            </div>
            <div class="cruise-content-operate">
                <div class="content-operate">
                    <div class="icon-plus content-operate-add" @click.stop="showAddPop"></div>
                    <delete-item v-for="(item, index) of curiseData.resources" :deleteData="item" :key="index" @deleteOnClick="deleteItem(curiseData, index)"></delete-item>
                </div>
                <div class="cruise-content-deny" v-show="curiseData.status == 'building'">
                    <div class="icon-deny"></div>
                    <div>
                        Deny
                    </div>
                </div>
            </div>
            <div v-if="popShowFlag">
                <div class="pop-content">
                    <div class="arrow-top arrow-box">
                        <b class="top"><i class="top-arrow1"></i><i class="top-arrow2"></i></b>
                    </div>
                    <div class="icon-close pop-close" @click.stop="popShowFlag = false; inputValue = ''">
                    </div>
                    <div class="pop-content-title">Separate multiple resource name with commas</div>
                    <div class="pop-content-input">
                        <input class="" type="text" placeholder="e.g.Chorme,FireFox" v-model="inputValue">
                    </div>
                    <div class="pop-btn">
                        <div class="curise-btn" @click.stop="addResource">Add Resourse</div>
                        <div class="curise-btn cancel-btn-color" @click.stop="popShowFlag = false; inputValue = ''">Canel</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DeleteItem from "./DeleteItem"
    import {mapActions} from "vuex"

    export default {
        name: "CruiseItem",
        components: {
            DeleteItem
        },
        props: ["curiseData"],
        data() {
            return {
                popShowFlag: false,
                inputValue: "",
                imgHeader: process.env.BASE_URL
            }
        },
        mounted() {
            document.addEventListener('click', this.handleBodyClick);
        },
        methods: {
            ...mapActions(["updateAgentInfo", "getAgentInfoById"]),
            handleBodyClick() {
                if(this.popShowFlag) {
                    this.popShowFlag = false;
                }
            },

            showAddPop() {
                this.popShowFlag = true;
                this.$emit("addPopClick")
            },

            deleteItem(curiseData, index) {
                let params = {...curiseData};
                params.resources.splice(index, 1);
                this.updateAgentInfo(params)
            },

            addResource() {
                let params = this.curiseData;
                let resources = this.inputValue.split(",");
                params.resources = params.resources.concat(resources);
                try {
                    this.updateAgentInfo(params)
                } catch (e){
                    console.log(e);
                } finally {
                    this.popShowFlag = false;
                }

            }
        },
        watch: {
            popShowFlag(val) {
                if(!val) {
                    this.inputValue = "";
                }
            }
        }
    }
</script>

<style scoped>
    .cruise-item {
        display: flex;
        background: #FFFFFF;
        margin: 5px 10px;
        padding: 10px;
        overflow-y: visible;
    }

    .cruise-item-img {
        flex: 1;
        text-align: left;
    }

    .cruise-item-content {
        flex: 8;
    }

    .cruise-item-content > div {
        margin: 15px 0;
    }

    .cruise-content-title {
        display: flex;
        font-size: 14px;
    }

    .cruise-content-title > div {
        display: flex;
        margin-left: 20px;
    }

    .cruise-content-title > div:first-child {
        margin-left: 0;
    }

    .content-title {
        font-size: 16px;
    }

    .content-ip {
        color: #00B4CF;
    }

    .content-status {
        padding: 0 5px;
        background: #FF9A2A;
        color: #ffffff;
    }

    .cruise-content-operate {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content-operate-add {
        padding: 5px 8px;
        background: #00B4Cf;
        color: #ffffff;
        font-size: 18px;
    }

    .content-operate {
        display: flex;
    }

    .cruise-content-deny {
        display: flex;
        align-items: center;
        background: #00B4CF;
        padding: 5px 10px;
        font-size: 14px;
        color: #FFFFFF;
    }

    .cruise-content-deny > div:last-child {
        margin-left: 10px;
    }

    .pop-content {
        text-align: left;
        width: 570px;
        box-shadow: 0px 3px 5px #000000;
        padding: 15px;
        border: 1px solid #00B4CF;
        position: absolute;
        background: #FFFFFF;
    }

    /*.pop-arrow-top {*/
        /*position: absolute;*/
        /*top: -10px;*/
        /*width:20px;*/
        /*height:20px;*/
        /*z-index: 2;!*兼容ie8-*!*/
        /*border:1px solid blue;*/
    /*}*/

    /*上箭头*/
    .top{
        width:20px;
        height:20px;
        position:absolute;
        left:5px;
        top:-20px;
        z-index: 2;/*兼容ie8-*/
    }
    .top-arrow1,.top-arrow2{
        width:0;
        height:0;
        display:block;
        position:absolute;
        left:0;
        top:0;
        z-index: 5;/*兼容ie8-*/
        border-top:10px transparent dashed;
        border-left:10px transparent dashed;
        border-right:10px transparent dashed;
        border-bottom:10px white solid;
        overflow:hidden;
    }
    .top-arrow1{
        border-bottom:10px #00B4CF solid;
    }
    .top-arrow2{
        top:1px;/*重要*/
        border-bottom:10px white solid;
    }

    .top-arrow1,.top-arrow2{
        width:0;
        height:0;
        display:block;
        position:absolute;
        left:0;
        top:0;
        z-index: 5;/*兼容ie8-*/
        border-top:10px transparent dashed;
        border-left:10px transparent dashed;
        border-right:10px transparent dashed;
        border-bottom:10px white solid;
        overflow:hidden;
    }
    .top-arrow1{
        border-bottom:10px #00B4CF solid;
    }
    .top-arrow2{
        top:1px;/*重要*/
        border-bottom:10px white solid;
    }

    .pop-content-title {
        margin: 10px 0 0;
    }

    .pop-content-input {
        margin: 10px 0 0;
    }

    .pop-content-input input{
        height: 25px;
        width: -webkit-fill-available;
    }

    .pop-btn {
        display: flex;
        margin: 20px 0 0;
    }

    .pop-btn >div:last-child{
        margin-left: 10px;
    }

    .pop-close {
        position: absolute;
        top:10px;
        right: 10px;
        font-size: 18px;
        color: #00B4CF;
    }

    .color_building {
        background: #FF9A2A;
    }

    .color_idle {
        background: #7FBC39
    }

</style>

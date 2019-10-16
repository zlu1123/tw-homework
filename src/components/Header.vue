<template>
    <div class="header-content">
        <div>
            <img class="header-content-img" src="../assets/homework/logo/logo.svg" alt="">
        </div>
        <div>
            <img class="header-content-img" src="../assets/homework/logo/logo.svg" alt="">
        </div>
        <div>
            <img class="header-user-img" src="../assets/homework/logo/avatar.jpg" alt="">
            <i class="icon-angle-down header-user"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header-content {
        display: flex;
        justify-content: space-between;
        padding: 10px 40px;
    }

    .header-content >div img{
        height: 40px;
    }

    .header-content >div:first-child{
        flex: 1;
        text-align: left;
    }

    .header-content >div:nth-child(2n){
        flex: 2;
    }


    .header-content >div:last-child{
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
</style>

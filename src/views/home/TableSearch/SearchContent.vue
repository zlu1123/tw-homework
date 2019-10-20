<template>
    <div class="box">
        <i v-show="!inputValue" class="icon-search" id="q_i"></i>
        <!--<label v-show="!inputValue"  for="q" id="q_label">请输入关键字</label>-->
        <input id="q" type="text" v-model="inputValue">
    </div>
</template>

<script>
    export default {
        name: "SearchContent",
        data() {
            return {
                inputValue: ""
            }
        },
    }
</script>

<style scoped>
    /**
      *放置input的div盒子
      *1.此处应我的项目需要，加了些特别的设置，如字体、背景色等，按需添加；
      *2.内层input不加边框，看起来效果会自然一点，所以外层div设置了边框和圆角
    */
    .box {
        background-color: #E1E4E6;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        font-size: 14px;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
    }

    /**
      *label标签样式 放在.box下，不至于影响其他的label
      *采取绝对定位，位置根据需求确定
    */
    .box label {
        left: 15%;
        z-index: 2;
        color: #B2B2B2;
        font-weight: normal;
        position: absolute;
    }

    /**
      *input标签样式
      *宽度适应外层div
      *隐藏边框
      *这里有个小技巧，height与line-height值相等，可保证文字垂直居中；但我发现文字比图标略偏下，进行了微调；
    */
    .box input {
        text-indent: 10px;
        height: 1.8rem;
        line-height: 1.9rem;
        width: 100%;
        border: none;
        outline: none;
    }

    /**
      *图标样式
      *绝对定位，自定义颜色
    */
    .box i {
        position: absolute;
        left: 5%;
        color: #B2B2B2;
        font-size: 20px;
    }
</style>
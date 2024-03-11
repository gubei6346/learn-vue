<template>
    <p>---------</p>
    <p :style="{ color: activeColor, fontSize: fontsize + 'px' }">Style绑定1</p>
    <p :style="styleObject">Style绑定2</p>
    <p :style="[styleObject]">Style绑定3</p>
</template>
<script>
export default {
    data() {
        return {
            activeColor: "blue",
            fontsize: 30,
            styleObject: {
                color: "red",
                fontSize: "30px"
            }
        }
    }
}
</script>
<template>
    <h3>Solts续集</h3>
    <slot name="header">插槽默认值</slot>
    <!-- 没有传递数据则显示默认值 -->
    <a href="#">11111111111111111</a>
    <hr>
    <slot name="main">插槽默认值111</slot>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<template>
    <h3>ComponentA</h3>
    <p>{{ message }}</p>
    <button @click="updataHandle">更新数据</button>
</template>
<script>
export default {
    data() {
        return {
            message: "老数据"
        }
    },
    beforeUnmount() {
        console.log("组件卸载前")
    },
    unmounted() {
        console.log("组件卸载后")
    },
    methods: {
        updataHandle() {
            this.message = "新数据"
        }
    }
}
</script>
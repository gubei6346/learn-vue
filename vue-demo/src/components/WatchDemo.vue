<template>
    <p>----------</p>
    <h3>侦听器</h3>
    <p>{{ messaage }}</p>
    <button @click="updateHandle">修改数据</button>
</template>
<script>
export default {
    data() {
        return {
            messaage: "hello"
        }
    },
    methods: {
        updateHandle() {
            this.messaage = "World"
        }
    },
    watch: {
        //newValue改变之后的数据
        //oldValue改变之前的数据
        //函数名必须与侦听的数据对象保持一致
        messaage(newValue, oldValue) {
            //数据发生变化，自动执行的函数
            console.log(newValue, oldValue)
        }
    }
}
</script>
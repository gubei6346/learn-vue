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

        }
    }
}
</script>
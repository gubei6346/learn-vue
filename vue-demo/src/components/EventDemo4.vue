<template>
    <p>---------------</p>
    <h3>方法事件处理器111</h3>
    <button @click="addCount('hello')">Add</button>
    <p>{{ count }}</p>
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount(msg) {
            console.log(msg);
            this.count++;

        }
    }
}
</script>
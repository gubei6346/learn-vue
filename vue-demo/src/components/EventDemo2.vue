<template>
    <p>---------------</p>
    <h3>方法事件处理器</h3>
    <button @click="addCount">Add</button>
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
        addCount() {
            //console.log(this.count);
            this.count++;

        }
    }
}
</script>
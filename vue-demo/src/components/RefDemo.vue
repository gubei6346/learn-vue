<template>
    <p>----------</p>
    <div ref="container" class="container">{{ content }}</div>
    <input type="text" ref="username">
    <button @click="getElementHaandle">获取元素</button>
</template>
<script>
//内容改变:{{模板语法}}
//属性改变：v-bind:指令
//事件:v-on:click(@)
//如果没有特别需要，不要操作DOM
export default {
    data() {
        return {
            content: "内容"
        }
    },
    methods: {
        getElementHaandle() {
            //innerHTML原生js的属性
            console.log(this.$refs.container.innerHTML = "haahahaa")
            console.log(this.$refs.username.value)
        }
    }
}
</script>
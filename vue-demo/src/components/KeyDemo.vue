<template>
    <p>--------------</p>
    <h3>key属性添加到v-for</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
</template>
<script>
export default {
    data() {
        return {
            names: ["111", "222", "333"]
        }
    }
}
</script>
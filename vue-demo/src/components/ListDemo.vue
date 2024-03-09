<template>
    <p>-------------</p>
    <h3>列表渲染</h3>
    <p v-for="(item, index) of  names ">{{ item }}-{{ index }}</p>
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
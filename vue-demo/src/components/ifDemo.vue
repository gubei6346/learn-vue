<template>
    <p>------------</p>
    <h3>条件渲染</h3>
    <div v-if="flag">can u see me</div>
    <div v-else>so u see me pls</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not a/b/C</div>
    <div v-show="flag">caan u seeee me</div>
</template>
<script>
export default {
    data() {
        return {
            flag: true,
            type: "D"
        }
    }
}
</script>
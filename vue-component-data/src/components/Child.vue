<template>
    <h3>Child</h3>
    <p>{{ title1 }}</p>
    <p>{{ message }}</p>
    <p>{{ fullmessage }}</p>
    <p>{{ globalData }}</p>
</template>
<script>
export default {
    inject: ["message", "globalData"],
    data() {
        return {
            fullmessage: this.message
        }
    },
    props: {
        title1: {
            type: String
        }
    }
}
</script>
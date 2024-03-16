<template>
    <h3>组件的生命周期函数应用</h3>
    <p ref="name">1221414</p>
</template>
<script>
export default {
    data() {
        return {
            banner: []
        }
    },

    beforeMount() {
        console.log(this.$refs.name)//udefined
    },
    mounted() {
        this.banner = ""
        console.log(this.$refs.name)
    }
}
</script>
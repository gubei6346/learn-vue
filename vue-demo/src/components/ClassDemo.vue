<template>
    <p>----------</p>
    <p :class="{ 'active': isActive, 'text-danger': hasError }">Class样式绑定</p>
</template> 
<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true
        }
    }
}
</script>
<style>
.active {
    color: red;
}
</style>
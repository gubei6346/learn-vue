<template>
    <h3>Slots再续集</h3>
    <slot name="Header1" :msg="childMessage"></slot>
    <slot name="main" :job="jobMessage"></slot>
</template>
<script>
export default {
    data() {
        return {
            childMessage: "字组件数据",
            jobMessage: "12314124"
        }
    }
}
</script>
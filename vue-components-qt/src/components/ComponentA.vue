<template>
    <h3>componentA</h3>
    <ComponentB :title="titles" />
</template>
<script>
import ComponentB from './ComponentB.vue';
export default {
    data() {
        return {
            titles: "标题",
            age: 20,
            names: ["iwen", "21321"]
        }
    },
    components: {
        ComponentB
    }
}
</script>
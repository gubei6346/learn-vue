<template>
    <h3>ComponentA</h3>
    <ComponentB title="标题" :onEvent="dataFn" />
    <p>{{ message }}</p>
</template>
<script>
import ComponentB from './ComponentB.vue';
export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        ComponentB
    },
    methods: {
        dataFn(data) {
            this.message = data
        }
    }
}
</script>
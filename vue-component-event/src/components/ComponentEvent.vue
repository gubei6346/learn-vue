<template>
    <h3>组件事件</h3>
    <Child @someEvent="getHandle" />
    <p>父元素:{{ message }}</p>
</template>
<script>
import Child from './Child.vue';
export default {
    data() {
        return {
            message: "更改前"
        }
    },
    components: {
        Child
    },
    methods: {
        getHandle(data) {
            console.log("触发了", data)
            this.message = data;

        }
    }
}
</script>
<template>
    <h3>Parent</h3>
    <Child :title="message" demo="测试" :age="ages" :names="names" :userInfo="userInfo" />
</template>
<script>
import Child from "./Child.vue";
export default {
    data() {
        return {
            message: "Parent数据！！！",
            ages: 20,
            names: ["iwenn", "ameeee", "frnagk"],
            userInfo: {
                name: "1111iwen",
                age: 20
            }
        }
    },
    components: {
        Child
    }
}
</script>
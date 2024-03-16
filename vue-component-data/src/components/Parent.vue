<template>
    <h3>Parent</h3>
    <Child :title1="title" />
    <p>{{ globalData }}</p>
</template>
<script>
import Child from './Child.vue';
export default {
    inject: ["globalData"],

    components: {
        Child
    },
    props: {
        title: {
            type: String
        }
    }
}
</script>

<template>
    <h3>componentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item, index) of names" :key="index">{{ item }}</p>
    <button @click="updataHandle">修改数据</button>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: [Number, String, Array, Object],
            //必选项
            requird: true
        },
        age: {
            type: Number,
            default: 0
        },
        //数字和字符串可以直接default,但是如果是数组和对象，必须通过工厂函数返回默认值
        names: {
            type: Array,
            default() {
                return ["blank"]
            }
        }
    },
    methods: {
        updataHandle() {
            //错误操作 不允许修改父元素数据(只读)
            //this.title = "new title"
        }
    }
}
</script>
<template>
    <p>----------</p>
    <h3>{{ itbaizhan.name }}</h3>
    <p>{{ itbaizhanContent }}</p>
    <p>{{ itbaizhanContents() }}</p>
</template>
<script>
export default {
    data() {
        return {
            itbaizhan: {
                name: "百战程序员",
                content: ["前端", "Java", "python"]
            }
        }
    },
    //计算属性
    computed: {
        itbaizhanContent() {
            return this.itbaizhan.content.length > 0 ? 'yes' : 'no';
        }
    },
    //放函数或者方法
    methods: {
        itbaizhanContents() {
            return this.itbaizhan.content.length > 0 ? 'yes' : 'no';
        }
    }
}
</script>
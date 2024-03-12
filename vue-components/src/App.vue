<template>
  <!--第三步：显示组件  -->
  <MyComponent />
</template>
<script>
//第一步引入组件
import MyComponent from "./components/MyComponet.vue"
export default {
  //第二步：注入组件
  components: {
    MyComponent
  }
}
</script>
<style></style>
<template>
  <UseComponent />
  <!--<component :is="tabComponent"></component>    组件切换-->
  <!--组件保持存活-->
  <KeepAlive>
    <component :is="tabComponent"></component>
  </KeepAlive>
  <button @click="changeHandle">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from "vue";
import UseComponent from "./components/UseComponent.vue"
import ComponentA from "./components/ComponentA.vue";
// import ComponentB from "./components/ComponentB.vue";
//异步加载组件
const ComponentB = defineAsyncComponent(() =>
  import("./components/ComponentB.vue")
)
export default {
  data() {
    return {
      tabComponent: "ComponentA"
    }
  },
  components: {
    UseComponent,
    ComponentA,
    ComponentB
  },
  methods: {
    changeHandle() {
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"//字符串形式赋值
    }
  }
}
</script>
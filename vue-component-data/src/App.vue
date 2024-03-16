<template>
  <h3>Grand</h3>
  <Parent title="propety" />
</template>
<script>
import Parent from "./components/Parent.vue"
export default {
  data() {
    return {
      message1: "propety123"
    }
  },
  //provid 和inject只能由上到下传
  provide() {
    return {
      message: this.message1
    }
  },
  // provide: {
  //   message: "propetyyyy"
  // },
  components: {
    Parent
  }
}
</script>
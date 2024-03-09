<template>
  <div :id="dynamicId" v-bind:class="dynamicClass">测试</div>
  <button :disabled="idButtonDisaabled">Button</button>
  <div v-bind="objectOfAttrs">test</div>
</template>
<script>
export default {
  data() {
    return {
      dynamicClass: "aappclaass",
      dynamicId: "appID",
      idButtonDisaabled: false,
      objectOfAttrs: {
        class: "aappclaass",
        id: "appID"
      }

    }
  }
}
</script>
<style>
.aappclaass {
  color: red;
  font-size: 30px;
}
</style>


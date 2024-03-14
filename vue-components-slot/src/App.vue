<template>
  <SlotsBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase>
  <SlotsTow>
    <template #header>
      <h3>{{ message }}</h3>
    </template>
    <template v-slot:main>
      <p>内容</p>
    </template>
  </SlotsTow>
  <SlotsAttr>
    <h3>{{ currentTest }}</h3>
  </SlotsAttr>
</template>

<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsTow from './components/SlotsTow.vue';
import SlotsAttr from './components/SlotsAttr.vue';
export default {
  data() {
    return {
      message: "插槽内容111",
      currentTest: "测试内容"
    }
  },
  components: {
    SlotsBase,
    SlotsTow,
    SlotsAttr,

  }
}
</script>



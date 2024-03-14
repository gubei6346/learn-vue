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
</template>

<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsTow from './components/SlotsTow.vue';
export default {
  data() {
    return {
      message: "插槽内容111"
    }
  },
  components: {
    SlotsBase,
    SlotsTow
  }
}
</script>



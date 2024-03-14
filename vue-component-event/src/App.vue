<template>
  <ComponentEvent />
  <Main />
  <ComponentA />
</template>
<script>
import ComponentEvent from './components/ComponentEvent.vue';
import Main from './components/Main.vue';
import ComponentA from './components/ComponentA.vue';
export default {
  components: {
    ComponentEvent,
    Main,
    ComponentA
  }
}
</script>

<template>
  <ComponentEvent />
  <Main />
  <ComponentA />
  <AttrComponents class="attr-container" />
</template>
<script>
import ComponentEvent from './components/ComponentEvent.vue';
import Main from './components/Main.vue';
import ComponentA from './components/ComponentA.vue';
import AttrComponents from './components/AttrComponents.vue'
export default {
  components: {
    ComponentEvent,
    Main,
    ComponentA,
    AttrComponents
  }
}
</script>

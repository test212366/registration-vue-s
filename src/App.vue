<template>
  <component :is="layout">
      <router-view/>
  </component>

</template>

<script>
import Empty from "@/layout/Empty";
import Main from "@/layout/Main";
export default {
  components: {
    Empty, Main
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
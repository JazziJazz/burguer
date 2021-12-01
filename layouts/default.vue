<template>
  <div class="default-layout">
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({});
</script>

<style scoped>
.default-layout:nth-child(1) {
  min-height: 700px;
}

.default-layout {
  background-image: url("@/assets/images/background.jpg");
}
</style>

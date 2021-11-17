<template>
  <div class="container">
    <button v-on:click="saySomething" class="btn btn-primary">Say</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { market } from "@/store";

export default Vue.extend({
  asyncData() {
    console.log(market.$products);
  },
  methods: {
    saySomething: function () {
      this.$toast.success(`${market.$products}`);
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
}
</style>

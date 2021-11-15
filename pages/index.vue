<template>
  <div class="container">

    <button v-on:click="saySomething" class="btn btn-primary">Say</button>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    saySomething: function() {
      this.$toast.success("Teste!");
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
}
</style>
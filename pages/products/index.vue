<template>
  <div class="container">
    <section class="products">
      <ul v-for="product in $all" :key="product.id" class="product">
        <li class="product-image">
          <img v-bind:src="product.url" />
        </li>
        <li class="product-title">{{ product.title }}</li>
        <li class="product-price">(R$ {{ product.price.toFixed(2) }})</li>
        <li class="product-description">
          {{ product.description }}
        </li>
        <li class="product-button">
          <b-button
            v-if="!isInBag(product)"
            block
            pill
            variant="primary"
            v-on:click="addToBag(product)"
            >Add to bag</b-button
          >
          <b-button
            v-else
            block
            pill
            variant="danger"
            v-on:click="removeFromBag(product)"
            >Remove from bag</b-button
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { market } from "@/store";
import { Product } from "~/models";

export default Vue.extend({
  async asyncData() {
    await market.index();
  },
  computed: {
    $all: function () {
      return market.$all;
    },
    $productsInBag: function () {
      return market.$productsInBag;
    }
  },
  methods: {
    addToBag: function (product: Product) {
      product.quantity = 1;
      market.addToBag(product);
    },
    removeFromBag: function (product: Product) {
      market.removeFromBag(product);
    },
    isInBag: function (product: Product) {
      return this.$productsInBag.find((element) => element.id === product.id);
    }
  }
});
</script>

<style lang="scss" scoped>
.products {
  min-height: calc(100vh + 220px);
  text-align: center;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;

  display: grid;
}

.product {
  background-color: whitesmoke;
  min-height: 640px;
  width: 250px;
  list-style: none;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 2px 5px 15px 0.05px black;

  display: table;

  .product-image {
    padding: 0;
    background-color: whitesmoke; // remover no final

    img {
      margin-top: 20px;
      width: 100%;
      height: auto;
      border-radius: 50%;
      box-shadow: 2px 2px 15px 0.2px black;
    }
  }

  .product-title {
    margin-top: 10px;
    font-weight: bold;
  }

  .product-price {
    font-style: italic;
  }

  .product-description {
    margin: 20px auto;
    text-align: left;
    height: 288px;
  }
}
</style>

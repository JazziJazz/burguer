<template>
  <div class="container">
    <section>
      <ul class="products-in-bag">
        <li
          v-for="product in $productsInBag"
          v-bind:key="product.id"
          class="product"
        >
          <div class="product-image-box">
            <img v-bind:src="product.url" class="product-image" />
          </div>
          <div class="product-information-box">
            <div class="product-name">{{ product.title }}</div>
            <div class="product-description">{{ product.description }}</div>
          </div>
          <div class="product-property-box">
            <div class="product-quantity">
              <button
                v-on:click.stop="
                  product.quantity--;
                  active = !active;
                "
                v-bind:disabled="product.quantity == 1"
                class="btn btn-primary"
                :class="{ selected: active }"
              >
                -
              </button>
              <button class="btn btn-outline-primary info-quant" disabled>
                {{ product.quantity }}
              </button>
              <button
                v-on:click.stop="
                  product.quantity++;
                  active = !active;
                "
                class="btn btn-primary"
                :class="{ selected: active }"
              >
                +
              </button>
            </div>

            <div class="product-remove">
              <button
                type="button"
                class="btn btn-outline-danger btn-md btn-block rounded-pill"
                v-on:click="removeFromBag(product)"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <aside v-if="$productsInBag.length > 0" class="grand-total">
      <div
        v-for="product in $productsInBag"
        :key="product.id"
        class="product-information"
      >
        <div class="info">
          <h1 class="product-name">{{ product.title }}</h1>
          <p class="product-description">
            {{ product.description }}
          </p>
          <div class="product-price">
            <strong>Valor unitário do produto</strong>: R${{ product.price }}
          </div>
        </div>

        <div class="value">
          <div class="product-total-quantity">
            <strong>Quantidade do produto</strong>: {{ product.quantity }}
          </div>

          <div class="product-total-price">
            <strong>Valor total do pedido</strong>: R$
            {{ (product.quantity * product.price).toFixed(2) }}
          </div>
        </div>
      </div>

      <div class="total-value">
        O total da compra é de R${{ getTotalPrice() }}!
        <div class="options">
          <button class="btn btn-success btn-block">Finalizar Pedido</button>
          <button class="btn btn-danger btn-blick">Limpar Carrinho</button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { market } from "@/store";
import { Product } from "@/models";

export default Vue.extend({
  data() {
    return {
      active: false
    };
  },
  computed: {
    $productsInBag: function () {
      return market.$productsInBag;
    }
  },
  methods: {
    productIsInBag: function (product: Product) {
      this.$productsInBag.find((element) => element.id == product.id);
    },
    removeFromBag: function (product: Product) {
      market.removeFromBag(product);
    },
    getTotalPrice: function () {
      let totalValue = 0;

      this.$productsInBag.forEach((element) => {
        totalValue += element.price * element.quantity;
      });

      return totalValue.toFixed(2);
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  font-family: sans-serif;
  min-height: 500px;
  margin: 25px auto;

  grid-template-columns: 7fr 4fr;
  grid-template-areas: "section aside";

  gap: 1rem;
  display: grid;
}

section {
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  background-color: whitesmoke;
  grid-template-columns: 1fr;

  grid-area: section;

  .products-in-bag {
    padding: 15px;
    margin: 0;

    list-style: none;
    margin-top: 25px;

    justify-content: center;
    align-content: center;

    gap: 0.5rem;
    display: grid;

    .product {
      grid-template-columns: 4fr 6fr 4fr;
      grid-auto-rows: auto;
      grid-auto-flow: column;
      display: grid;
      gap: 1rem;

      .product-image-box {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16),
          0 2px 10px rgba(0, 0, 0, 0.12);
        justify-content: center;
        align-content: center;
        border-radius: 25px;

        display: grid;

        .product-image {
          width: 80%;
          height: auto;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16),
            0 2px 10px rgba(0, 0, 0, 0.12);

          margin-left: 10%;
        }
      }

      .product-information-box {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16),
          0 2px 10px rgba(0, 0, 0, 0.12);
        border-radius: 25px;
        padding: 10px;

        display: grid;

        .product-name {
          font-weight: bold;
          text-align: center;
        }
      }

      .product-property-box {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16),
          0 2px 10px rgba(0, 0, 0, 0.12);
        justify-content: center;
        border-radius: 25px;

        display: grid;

        .product-quantity {
          margin-top: 4rem;
          align-self: center;

          .info-quant {
            width: 5rem;
          }
        }

        .product-remove {
          align-self: end;
          margin-bottom: 10px;
        }
      }
    }
  }
}

.selected {
  border: 2px solid rgb(29, 134, 233);
}

aside {
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  background-color: whitesmoke;
  padding: 15px;
  gap: 1rem;

  grid-template-columns: 1fr;
  grid-auto-rows: 150px;

  display: table;
  grid-area: aside;

  .product-information {
    grid-template-columns: 7fr 3fr;
    display: grid;
    gap: 1rem;
    margin: 10px auto;

    .info {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
      border-radius: 25px;
      background-color: whitesmoke;
      padding: 10px;

      h1 {
        font-size: 16px;
        font-weight: bold;
      }

      p {
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 6rem;
      }
    }

    .value {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
      border-radius: 25px;
      background-color: whitesmoke;
      padding: 10px;

      text-align: center;

      .product-total-price {
        margin-top: 20px;
      }
    }
  }

  .total-value {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
    background-color: rgb(231, 231, 231);
    border-radius: 50px !important;

    height: 100px;
    padding: 15px;

    display: table-row;
    vertical-align: bottom;
    text-align: center;

    .options {
      padding: 15px;

      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      display: grid;
    }
  }
}
</style>

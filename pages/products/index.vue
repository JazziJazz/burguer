<template>
  <div class="container">
    <section class="products">
      <ul class="product">
        <li class="product-image">
          <img src="@/assets/images/hamburguer.jpg" />
        </li>
        <li class="product-title">Hambúrguer dos Deuses</li>
        <li class="product-price">(R$ 27,60)</li>
        <li class="product-description">O hamburguer que levou o prêmio de melhor hambúrguer de São Paulo durante seis décadas consecutivas. O cheiro, a aparência e o sabor são experiências únicas que são marcadas de maneira permanente no paladar dos nossos clientes.</li>
        <li class="product-button">
          <b-button block pill variant="primary">Add to bag</b-button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.products {
  height: calc(100vh + 220px);
  text-align: center;
}

.product {
  background-color: whitesmoke;
  height: 640px;
  width: 250px;
  list-style: none;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 2px 5px 15px 0.05px black;
  display: grid;

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
  }

  .product-button {
      background-color: whitesmoke;
  }
}
</style>

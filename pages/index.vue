<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="500"
      img-height="500"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="@/assets/images/carrousel/2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="@/assets/images/carrousel/3.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="@/assets/images/carrousel/4.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="@/assets/images/carrousel/5.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <section>
      <h1>Zê Éle Burguer</h1>
      <p>
        A Zê Éle Burguer fundada no final de 2019 no ramo do delivery localizada na região leste no bairro da Vila Matilde na Cidade de São Paulo,
        expecializada no Smahs Burguer levando experiencia e sabores dentro da sua casa.        
      </p>


    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { market } from "@/store";

export default Vue.extend({
  created() {
    //market.loadBag();
  },
  data() {
    return {
      slide: 0,
      sliding: true
    };
  },
  async asyncData() {
    await market.index();
  },
  methods: {
    onSlideStart(slide: any) {
      this.sliding = true;
    },
    onSlideEnd(slide: any) {
      this.sliding = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
}

section {
  font-family: sans-serif;

  background-color: whitesmoke;
  border-radius: 10px;

  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
}

.carousel-item {
  margin-top: 20px;
  height: 300px !important;

  img {
    border-radius: 10px;
  }
}
</style>

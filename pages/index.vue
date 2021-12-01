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
      <h1>Hamburgueria Zona Leste</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        dolore provident quis ullam iusto voluptatum vel officia mollitia, ut
        nulla veniam soluta nisi dolor laudantium sed harum nihil laboriosam
        obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque officia non ducimus architecto. In, voluptatibus repellat,
        placeat asperiores itaque saepe nulla rerum animi incidunt consequatur
        dolore, quis neque labore sit.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia
        tempore iste eius ut, dolorem dolore consectetur iure exercitationem
        sapiente laudantium vero animi atque cum blanditiis fugit voluptate
        enim? Fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur voluptatibus aspernatur veritatis, corrupti dolorum
        molestiae velit iusto et asperiores quas dicta officiis exercitationem
        repellendus, assumenda dignissimos alias animi amet ipsa?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat
        explicabo deleniti natus. Debitis necessitatibus inventore architecto
        temporibus sit, qui blanditiis! Ullam quam iusto distinctio in vitae non
        dignissimos fugit. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quidem fugit blanditiis reprehenderit praesentium consequuntur
        eligendi quam accusantium iusto illo? Accusantium amet libero quisquam
        cupiditate ab ullam tenetur earum nostrum adipisci.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur
        animi accusamus quae laborum suscipit omnis, ad facilis praesentium id
        culpa aperiam repudiandae voluptate voluptatibus fuga labore voluptas
        adipisci minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo dignissimos iure veritatis consequuntur quae possimus suscipit,
        ipsa fuga temporibus architecto quia! Molestias perferendis culpa illum.
        Nisi explicabo provident ipsa inventore? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Possimus fugit beatae debitis dicta quae
        expedita! Enim excepturi quos a illo quisquam natus perspiciatis
        delectus? Exercitationem earum error officia ab reprehenderit!
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

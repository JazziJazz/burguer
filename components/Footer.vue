<template>
  <div class="footer-component">
    <footer class="bg-dark text-center text-white footer navbar-fixed-bottom">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section>
          <!-- Facebook -->
          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'facebook']"
              class="icon alt"
              size="lg"
          /></NuxtLink>

          <!-- Twitter -->
          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'twitter']"
              class="icon alt"
              size="lg"
          /></NuxtLink>

          <!-- Google -->
          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'google-plus']"
              class="icon alt"
              size="lg"
            />
          </NuxtLink>

          <!-- Instagram -->
          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'instagram']"
              class="icon alt"
              size="lg"
            />
          </NuxtLink>

          <!-- Linkedin -->

          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="icon alt"
              size="lg"
            />
          </NuxtLink>

          <!-- Github -->
          <NuxtLink
            to="/"
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><font-awesome-icon
              :icon="['fab', 'github']"
              class="icon alt"
              size="lg"
            />
          </NuxtLink>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright: Orgulhosamente criado com VueJS e Nuxt por Rodrigo
        Siliunas.
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="icon alt"
          size="lg"
        />
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style scoped>
.footer-component {
  position: relative;
  bottom: 0;
  width: 100%
}
</style>

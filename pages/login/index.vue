<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <form class="row" v-on:submit.prevent="doLogin()">
      <div class="col-12">
        <label for="email-login" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email-login"
        />
      </div>

      <div class="col-12">
        <label for="password-login" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password-login"
        />
      </div>

      <div class="col 12 my-2">
        <b-button block variant="primary" type="submit">Sign In</b-button>
      </div>

      <div class="d-flex col-12 justify-content-center align-items-center">
        <p class="text-center">
          Você ainda não tem uma conta?
          <NuxtLink to="/register">Registre-se</NuxtLink> aqui. <br />Esqueceu a senha?
          Clique <NuxtLink to="/">aqui</NuxtLink>.
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "rodrigo.cunha@teste.com.br",
      password: "Rodrigo123"
    };
  },

  methods: {
    doLogin: async function () {
      await this.$auth
        .loginWith("local", {
          data: { email: this.email, password: this.password }
        })
        .then(() => {
          this.$toast.success("Você está logado!");
        })
        .catch(() => this.$toast.error("Erro! Credenciais informadas são inválidas.").goAway(4000));
    }
  }
});
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-top: 13vh;
  min-height: 600px;
}

form {
  background-color: whitesmoke;
  width: 40%;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

@media (max-width: 576px) {
  .container-fluid {
    margin-top: 5vh;
  }

  form {
    background-color: whitesmoke;
    width: 90%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
}
</style>

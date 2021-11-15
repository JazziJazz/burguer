<template>
  <div class="container-fluid">
    <div class="row my-5">
      <div class="col-1"></div>
      <div class="content col-10">
        <form class="row">
          <div class="col-6">
            <label for="firstName" class="form-label">Nome</label>
            <input
              v-model="user.fistName"
              type="text"
              class="form-control"
              name="firstName"
              id="firstName"
              placeholder="Nome"
            />
          </div>

          <div class="col-6">
            <label for="secondName" class="form-label">Sobrenome</label>
            <input
              v-model="user.lastName"
              type="text"
              class="form-control"
              name="secondName"
              id="secondName"
              placeholder="Sobrenome"
            />
          </div>

          <div class="col-6">
            <label for="cpf" class="form-label">CPF</label>
            <input
              v-model="user.cpf"
              type="text"
              class="form-control"
              name="cpf"
              id="cpf"
              placeholder="152.246.019-71"
              maxlength="14"
            />
            <small id="cpfHelp" class="form-text text-muted"
              >Nunca compartilharemos seu CPF com ninguém.</small
            >
          </div>

          <div class="col-6">
            <label for="rg" class="form-label">RG</label>
            <input
              v-model="user.rg"
              type="text"
              class="form-control"
              name="rg"
              id="rg"
              placeholder="53.202.420-3"
              maxlength="12"
            />
            <small id="rgHelp" class="form-text text-muted"
              >Nunca compartilharemos seu RG com ninguém.</small
            >
          </div>

          <div class="col-6">
            <label for="telFix" class="form-label">Telefone Fixo</label>
            <input
              v-model="user.telFixo"
              type="text"
              class="form-control"
              name="telFix"
              id="telFix"
              placeholder="(11) 3936-2931"
            />
          </div>

          <div class="col-6">
            <label for="telMob" class="form-label">Telefone Celular</label>
            <input
              v-model="user.telCelular"
              type="text"
              class="form-control"
              name="telMob"
              id="telMob"
              placeholder="(11) 96302-3837"
            />
          </div>

          <div class="col-12">
            <label for="email" class="form-label">E-mail</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="exemplo@mail.com"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Nunca compartilharemos seu EMAIL com ninguém.</small
            >
          </div>

          <div class="col-12">
            <label for="password" class="form-label">Senha</label>
            <input
              v-model="user.password"
              class="form-control"
              type="password"
              name="senha"
              id="password"
            />
            <small id="passwordHelp" class="form-text text-muted"
              >Nunca compartilhe sua senha com ninguém, nós nunca enviaremos
              e-mails solicitando sua senha.</small
            >
          </div>

          <div class="col-6">
            <label for="cidade" class="form-label">Cidade</label>
            <input
              type="text"
              class="form-control"
              name="cidade"
              id="cidade"
              v-model="user.city"
              disabled
              readonly
            />
          </div>

          <div class="col-3">
            <label for="" class="form-label">UF</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="user.uf"
              disabled
              readonly
            />
          </div>

          <div class="col-3">
            <label for="cep" class="form-label">CEP</label>
            <input
              type="text"
              class="form-control"
              name="cep"
              id="cep"
              placeholder="02754-090"
              v-model="user.cep"
              v-on:blur="fillAdress(user.cep)"
            />
          </div>

          <div class="col-8">
            <label for="rua" class="form-label">Endereço</label>
            <input
              type="text"
              class="form-control"
              name="rua"
              id="rua"
              v-model="user.locate"
              readonly
              disabled
            />
          </div>

          <div class="col-4">
            <label for="numero" class="form-label">Número</label>
            <input
              v-model="user.number"
              type="number"
              class="form-control"
              name="numero"
              id="numero"
              placeholder="42"
            />
          </div>

          <div class="d-grid col mx-auto my-3">
            <button
              type="submit"
              class="btn btn-primary btn-block"
              v-on:click.prevent="createUser"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      user: {
        fistName: "",
        lastName: "",
        cpf: "",
        rg: "",
        telFixo: "",
        telCelular: "",
        email: "",
        password: "",
        city: "",
        uf: "",
        cep: "",
        locate: "",
        number: ""
      }
    };
  },
  computed: {
    fullName(): string {
      return `${this.user.fistName} ${this.user.lastName}`;
    }
  },
  methods: {
    async fillAdress(cep: String) {
      try {
        const address = await this.$axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        this.user.city = address.data.localidade;
        this.user.uf = address.data.uf;
        this.user.cep = address.data.cep;
        this.user.locate = `${address.data.bairro}, ${address.data.logradouro}`;
      } catch (error) {
        console.log(error);
      }
    },
    async createUser() {
      await this.$axios
        .post("http://localhost:3333/register", {
          name: this.fullName,
          cpf: this.user.cpf,
          rg: this.user.rg,
          email: this.user.email,
          password: this.user.password,
          telFixo: this.user.telFixo,
          telCelular: this.user.telCelular,
          city: this.user.city,
          uf: this.user.uf,
          cep: this.user.cep,
          address: this.user.locate,
          number: Number(this.user.number),
          redirectUrl: "https://127.0.0.1/"
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.container-fluid {
  max-height: calc(100vh + 200px);
  min-height: 400px;
}

.content {
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: 8px 13px 15px rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
}

@media (max-width: 576px) {
  .container-fluid {
    height: calc(100vh + 380px);
  }
}
</style>

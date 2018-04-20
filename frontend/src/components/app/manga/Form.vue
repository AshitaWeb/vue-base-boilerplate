<template>
<div>

  <breadcrumb></breadcrumb>

  <div class="row">
    <div class="col">
      <form v-on:submit.prevent="save">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input v-model="form.nome" type="text" class="form-control" id="nome" placeholder="Nome">
        </div>

        <div class="form-group">
          <router-link :to="route" class="btn btn-danger">Cancelar</router-link>
          <button class="btn btn-primary float-right">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import ls from 'local-storage';

export default {
  data() {
    return {
      form: {
        nome: ''
      },
      route: this.$route.matched[0].path
    };
  },
  methods: {
    save() {
      const method = this.$route.params.id ? this.$http.put : this.$http.post;

      method(this.route, this.form).then(response => {
        if (response.data.success) {
          this.$toasted.show('Cadastrado com sucesso!', this.$custom.success);
          this.$router.push(this.route);
        } else {
          this.$toasted.show('Ocorreu um erro!', this.$custom.error);
        }
      });
    }
  },
  beforeMount() {
    if (this.$route.params.id) {
      this.$http
        .get(`${this.route}/${this.$route.params.id}`)
        .then(response => {
          if (response.data) this.form = response.data;
        });
    }
  }
};
</script>

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
          <router-link to="/alimento" class="btn btn-danger">Cancelar</router-link>
          <button :disabled="!form._id" class="btn btn-primary float-right">Atualizar</button>
        </div>

      </form>
    </div>
  </div>

</div>
</template>

<script>
import ls from 'local-storage';

export default {
  name: 'AlimentoEdit',
  data() {
    return {
      form: {
        nome: '',
        _id: ''
      },
      route: this.$route.matched[0].path
    };
  },
  methods: {
    save() {
      this.$http.put(`${this.route}`, this.form).then(response => {
        if (response.data.success) {
          this.$toasted.show('Alterado com sucesso!', this.$custom.success);
          this.$router.push(this.route);
        } else {
          this.$toasted.show('Ocorreu um erro!', this.$custom.error);
        }
      });
    }
  },
  beforeMount() {
    this.$http.get(`${this.route}/${this.$route.params.id}`).then(response => {
      if (response.data) this.form = response.data;
    });
  }
};
</script>

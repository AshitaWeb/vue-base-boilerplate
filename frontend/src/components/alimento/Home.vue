<template>
  <div>

    <breadcrumb></breadcrumb>

    <div class="row">
      <div class="col">
        <router-link :to="`${route}/new`" class="btn btn-success" role="button">New</router-link>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">

          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="item in data" :key="item._id">
                  <td scope="row">{{item.nome}}</td>
                  <td>
                    <router-link title="Edit" :to="{ name: 'AlimentoEdit', params: { id: item._id } }">
                      editar
                    </router-link>
                    /
                    <a href="javascript;" @click.prevent="remove(item._id)" title="Remover">remover</a>
                  </td>
                </tr>
              </tbody>
          </table>

      </div>
    </div>
  </div>
</template>

<script>
import ls from 'local-storage';

export default {
  name: 'Alimento',
  data() {
    return {
      data: [],
      route: this.$route.matched[0].path
    };
  },
  methods: {
    remove(id) {
      this.$http.delete(`${this.route}/${id}`).then(() => {
        this.$http.get(this.route).then(response => {
          this.data = response.data.data;
        });
      });
    }
  },
  beforeMount() {
    this.$http.get(this.route).then(response => {
      this.data = response.data.data;
    });
  }
};
</script>


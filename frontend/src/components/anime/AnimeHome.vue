<template>
  <div>

    <breadcrumb></breadcrumb>

    <div class="row">
      <div class="col">
        <router-link to="/anime/new" class="btn btn-success" role="button">New</router-link>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">

          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="item in data" :key="item._id">
                  <td scope="row">{{item.name}}</td>
                  <td>
                    <img :src="`${api}/api/v1/anime/image/${item.filename}?token=${token}&mimetype=${item.mimetype}`" :alt="item.name" class="rounded-circle img">
                  </td>
                  <td>
                    <router-link title="Edit" :to="{ name: 'AnimeEdit', params: { id: item._id } }">
                      edit
                    </router-link>
                    /
                    <a href="javascript;" @click.prevent="remove(item._id)" title="Remove">remove</a>
                  </td>
                </tr>
              </tbody>
          </table>

      </div>
    </div>
  </div>
</template>

<script>
import ls from 'local-storage'

export default {
  name: 'Anime',
  data() {
    return {
      data: [],
      api: '',
      token: ''
    }
  },
  methods: {
    remove(id) {
      this.$http.delete(`/v1/anime/${id}`).then(() => {
        this.$http.get('/v1/anime').then((response) => {
          this.data = response.data.data;
        });
      })
    }
  },
  beforeMount() {
    this.api = process.env.API_ENV
    this.token = ls('token')

    this.$http.get('/v1/anime').then((response) => {
      this.data = response.data.data
    });
  }
}
</script>


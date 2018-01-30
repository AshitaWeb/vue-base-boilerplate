<template>
<div>
  <div class="row">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <router-link tag="li" to="/" class="breadcrumb-item">
          <a>Home</a>
        </router-link>
        <li class="breadcrumb-item active">Anime</li>
      </ol>
    </nav>
  </div>
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
                <td>{{item.image}}</td>
                <td>
                  <router-link :to="{ name: 'AnimeEdit', params: { id: item._id } }">
                    Edit
                  </router-link>
                </td>
              </tr>
            </tbody>
        </table>

    </div>
  </div>
</div>
</template>

<script>

import AnimeNew from './AnimeNew'

export default {
  name: 'Anime',
  data() {
    return {
      data: [],
    }
  },
  beforeMount() {
    this.$http.get('/v1/anime').then((response) => {
      this.data = response.data.data;
    });
  }
}
</script>

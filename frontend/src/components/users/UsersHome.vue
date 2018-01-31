<template>
  <div>

    <breadcrumb></breadcrumb>

    <div class="row">
      <div class="col">
        <router-link to="/users/new" class="btn btn-success" role="button">New</router-link>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">

          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Login</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="item in data" :key="item._id">
                  <td scope="row">{{item.name}}</td>
                  <td>{{item.login}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.role}}</td>
                  <td>
                    <router-link title="Edit" :to="{ name: 'UsersEdit', params: { id: item._id } }">
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

export default {
  name: 'Users',
  data() {
    return {
      data: [],
    }
  },
  methods: {
    remove(id) {
      this.$http.delete(`/v1/usuario/${id}`).then(() => {
        this.$http.get('/v1/usuario').then((response) => {
          this.data = response.data.data;
          this.$router.push('/users');
        });
      })
    }
  },
  beforeMount() {
    this.$http.get('/v1/usuario').then((response) => {
      this.data = response.data.data;
    });
  },
}
</script>

<style>
  
</style>


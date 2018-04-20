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
                    <router-link title="Edit" :to="`${route}/edit/${item._id}`">
                      edit
                    </router-link>
                    /
                    <a href="javascript;" @click.prevent="remove(item._id)" title="Remove">remove</a>
                  </td>
                </tr>
              </tbody>
          </table>

          <pagination :records="total" :options='pagOpts' :per-page="perPage" @paginate="setPage">
          </pagination>

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
      route: this.$route.matched[0].path,
      page: 1,
      perPage: 3,
      total: 0,
      pagOpts: this.$custom.pagOpts
    };
  },
  methods: {
    remove(id) {
      this.$http.delete(`${this.route}/${id}`).then(() => {
        this.setPage(this.page);
      });
    },
    setPage: function(page) {
      this.page = page;

      const skip = (page - 1) * this.perPage;
      const limit = this.perPage;

      this.$http.post(`${this.route}/list`, { skip, limit }).then(response => {
        this.data = response.data.data;
        this.total = response.data.total;
      });
    }
  },
  beforeMount() {
    this.setPage(1);
  }
};
</script>

<style>

</style>


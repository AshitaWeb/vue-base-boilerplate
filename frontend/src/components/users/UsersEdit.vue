<template>
<div>

  <breadcrumb></breadcrumb>

  <div class="row">
    <div class="col">
      <form v-on:submit.prevent="save">

        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name">
        </div>

        <div class="form-group">
          <label for="image">Login</label>
          <input v-model="form.login" type="text" class="form-control" id="login" placeholder="Login">
        </div>

        <div class="form-group">
          <label for="image">Role</label>
          <select name="role" id="role" v-model="role">
            <option value="" disabled="true">--select--</option>
            <option value="admin">Administrator</option>
            <option value="user">Common</option>  
          </select>
        </div>

        <div class="form-group">
          <label for="image">Password</label>
          <input v-model="form.password" type="password" class="form-control" id="password" placeholder="password">
        </div>

        <div class="form-group">
          <router-link to="/users" class="btn btn-danger">Cancel</router-link>
          <button :disabled="!form._id" class="btn btn-primary float-right">Update</button>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-show="hasSuccess">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          User updated!
        </div>

        <div class="alert alert-danger alert-dismissible" role="alert" v-show="hasError">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          Error, try again.
        </div>

      </form>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'UsersEdit',
  data() {
    return {
      hasSuccess: false,
      hasError: false,
      form: {
        name: '',
        image: '',
        _id: ''
      }
    }
  },
  methods: {
    save() {
      this.$http.put('v1/usuario', this.form).then((response) => {
        if (response.data.success) {
          this.hasSuccess = true
          this.$router.push('/anime')
        } else {
          this.hasError = true
        }
      });
    }
  },
  beforeMount() {
    this.$http.get('/v1/usuario/' + this.$route.params.id).then((response) => {
      if (response.data)
      this.form = response.data
    })
  }
}
</script>

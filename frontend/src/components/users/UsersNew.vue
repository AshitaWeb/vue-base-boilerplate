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
          <label for="login">Login</label>
          <input v-model="form.login" type="text" class="form-control" id="login" placeholder="Login">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" class="form-control" id="email" placeholder="user@email.com">
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <select name="role" id="role" class="form-control" v-model="form.role">
            <option value="" disabled="true">--select--</option>
            <option value="admin">Administrator</option>
            <option value="user">Common</option>  
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" autocomplete="false" class="form-control" id="password" :change="passwordChanged()" placeholder="">
        </div>

        <div class="form-group">
          <label for="passwordConfirm">Confirm Password</label>
          <input v-model="form.passwordConfirm" type="password" autocomplete="false" class="form-control" id="passwordConfirm" placeholder="">
        </div>

        <div class="form-group">
          <router-link to="/users" class="btn btn-danger">Cancel</router-link>
          <button class="btn btn-primary float-right">Save</button>
        </div>

        <!-- <div class="alert alert-success alert-dismissible" role="alert" v-show="hasSuccess">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          New user created!
        </div>

        <div class="alert alert-danger alert-dismissible" role="alert" v-show="hasError">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          Error, try again.
        </div> -->

      </form>
    </div>
  </div>

</div>

</template>

<script>

export default {
  name: 'UsersNew',
  data() {
    return {
      hasSuccess: false,
      hasError: false,
      validatePassword: false,
      form: {
        login: '',
        email: '',
        role: '',
        password: '',
        passwordConfirm: '',
      }
    }
  },
  methods: {
    save() {
      if(this.form.password != this.form.passwordConfirm && this.validatePassword == true) {
        this.hasError = true;
      } else {
        this.$http.post('v1/usuario', this.form).then((response) => {
          if (response.data.success) {
            this.hasSuccess = true
            setTimeout(() => {
              this.$router.push('/users');
            }, 1500);
          } else {
            this.hasError = true
          }
        });
      }
    },
    passwordChanged() {
      this.validatePassword = true;
    }
  }
}
</script>

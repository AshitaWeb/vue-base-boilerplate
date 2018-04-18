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
            <option value="common">Common</option>
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" autocomplete="false" class="form-control" id="password" @change="passwordChanged()" placeholder="">
        </div>

        <div class="form-group">
          <label for="passwordConfirm">Confirm Password</label>
          <input v-model="form.passwordConfirm" type="password" autocomplete="false" class="form-control" id="passwordConfirm" placeholder="">
        </div>

        <div class="form-group">
          <router-link :to="route" class="btn btn-danger">Cancel</router-link>
          <button class="btn btn-primary float-right">Save</button>
        </div>
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
      validatePassword: false,
      form: {
        login: '',
        email: '',
        role: '',
        password: '',
        passwordConfirm: ''
      },
      route: this.$route.matched[0].path
    };
  },
  methods: {
    save() {
      if (
        !this.form.password ||
        !this.form.login ||
        (this.form.password != this.form.passwordConfirm &&
          this.validatePassword == true)
      ) {
        this.$toasted.show(
          'Inform the password and login.Password and password confirm must be equals.',
          this.$custom.error
        );
      } else {
        this.hasError = false;
        this.$http.post(this.route, this.form).then(response => {
          if (response.data.success) {
            this.$toasted.show('Cadastrado com sucesso!', this.$custom.success);
            this.$router.push(this.route);
          } else {
            this.$toasted.show('Ocorreu um erro!', this.$custom.error);
          }
        });
      }
    },
    passwordChanged() {
      this.validatePassword = true;
    }
  }
};
</script>

<template>
  <form class="form-signin" v-on:submit.prevent="logar">
    <h2 class="form-signin-heading">Login</h2>
    <input v-model="form.login" type="text" class="form-control" placeholder="Login" required autofocus>
    <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>

    <div class="alert alert-danger" role="alert" v-if="infoError">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
      </button>
      <strong>Erro!</strong> Wrong user or password.
    </div>
  </form>
</template>

<script>
import store from '@/store';
import ls from 'local-storage';
import axios from 'axios';

export default {
  name: 'login',

  data() {
    return {
      infoError: false,
      form: {
        login: '',
        password: ''
      }
    };
  },

  beforeCreate() {
    if (store.state.isLogged) {
      this.$router.push('/');
    }
  },

  methods: {
    logar() {
      this.infoError = false;

      axios
        .post(`${process.env.API_ENV}/api/login`, this.form)
        .then(response => {
          if (response.data.success) {
            ls('token', response.data.token);
            store.commit('LOGIN_USER');
            this.$router.push('/');
          } else {
            this.infoError = true;
          }
        });
    }
  }
};
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 80px auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

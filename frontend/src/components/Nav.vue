<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-show="isLogged">
    <router-link to="/" class="navbar-brand">VUE BASE</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>

        <router-link tag="li" to="/anime" class="nav-item">
          <a class="nav-link">Animes</a>
        </router-link>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> -->
      </ul>
      <ul class="navbar-nav my-2 my-md-0 mr-md-3 ">
        <li class="nav-item">
          <router-link to="/logout" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import store from "@/store";

export default {
  name: 'app-nav',
  methods: {
    logout() {
      this.$router.go('/logout')
    }
  },
  computed: {
    isLogged() {
      return store.state.isLogged
    }
  }
}
</script>

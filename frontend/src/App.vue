<template>
  <div>
    <app-nav></app-nav>

    <div id="app" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import AppNav from "@/components/Nav";

export default {
  name: 'App',
  components: {
    AppNav,
  },
  beforeCreate () {
    if (!store.state.isLogged) {
        this.$router.push('/login')
    }
  },
}
</script>


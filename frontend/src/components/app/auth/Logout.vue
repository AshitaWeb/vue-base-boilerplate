<template>
  <div>
    logout...
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'logout',

    mounted () {
      localStorage.removeItem('token');
      store.commit('LOGOUT_USER');
      this.$router.push('login');
    }
  }
</script>

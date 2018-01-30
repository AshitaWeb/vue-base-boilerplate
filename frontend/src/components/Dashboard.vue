<template>
<div>

  <div class="row">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <router-link tag="li" to="/" class="breadcrumb-item">
          <a>Home</a>
        </router-link>
      </ol>
    </nav>
  </div>
  <div class="row">
    <div class="col">
      <div class="jumbotron">
        Welcome to VUEBASE Dashboard with authentication in JWT.
        
        <p>WIP - This is a study case</p>
      </div>
      <p class="text-center"><a href="https://rubensfernandes.mit-license.org/">MIT License</a> © Rubens Fernandes</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

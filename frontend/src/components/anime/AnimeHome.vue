<template>

  <div class="row">
    <div class="col">
      <div class="jumbotron">
        Anime Home
      </div>
    </div>
  </div>

</template>

<script>

import AnimeNew from './AnimeNew'

export default {
  name: 'Anime',
  beforeCreated() {
    this.$router.addRoutes([
      {
        path: '/anime/new',
        name: 'AnimeNew',
        component: AnimeNew
      },
      {
        path: '/anime/editar/:id',
        name: 'AnimeEdit',
        component: AnimeEdit
      },
    ]);
  }
}
</script>

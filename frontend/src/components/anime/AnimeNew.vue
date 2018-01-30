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
          <label for="image">URL image</label>
          <input v-model="form.image" type="text" class="form-control" id="image" placeholder="Url image">
          <hr>
          <img :src="form.image" :alt="form.name" class="rounded-circle img">
        </div>
        <div class="form-group">
          <router-link to="/anime" class="btn btn-danger">Cancel</router-link>
          <button class="btn btn-primary float-right">Save</button>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-show="hasSuccess">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          New anime created!
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
  name: 'AnimeNew',
  data() {
    return {
      hasSuccess: false,
      hasError: false,
      form: {
        name: '',
        image: '',
      }
    }
  },
  methods: {
    save() {
      this.$http.post('v1/anime', this.form).then((response) => {
        if (response.data.success) {
          this.hasSuccess = true
          this.$router.push('/anime')
        } else {
          this.hasError = true
        }
      });
    }
  }
}
</script>

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
          <img :src="`${api}/api/v1/anime/image/${form.filename}?token=${token}&mimetype=${form.mimetype}`" :alt="form.name" class="rounded-circle img">
        </div>

        <div class="form-group">
          <label for="image">Upload Image</label>
          <vue-dropzone ref="image" id="image" :options="dropzoneOptions" v-on:vdropzone-success="updateImage"></vue-dropzone>
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
import vueDropzone from 'vue2-dropzone'
import ls from 'local-storage'

export default {
  name: 'AnimeNew',
  components:{
    vueDropzone
  },
  data() {
    return {
      api: '',
      token: '',
      hasSuccess: false,
      hasError: false,
      form: {
        name: '',
        mimetype: '',
        filename: '',
        originalname: ''
      },
      dropzoneOptions: this.$http.getDropzoneConfig('v1/anime/upload', 'post', {
          maxFiles: 1,
          acceptedFiles: 'image/*',
          addRemoveLinks: true,
          capture: true
      })
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
    },
    updateImage(file, response) {
      this.form.mimetype = response.mimetype
      this.form.filename = response.filename
      this.form.originalname = response.originalname
    },
    getImage() {
      this.$http.get('v1/anime/image/')
    }
  },
  beforeMount() {
    this.api = process.env.API_ENV
    this.token = ls('token')
  }
}
</script>

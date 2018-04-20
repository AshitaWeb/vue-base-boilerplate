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
          <img :src="`${api}/api/v1${route}/image/${form.filename}?token=${token}&mimetype=${form.mimetype}`" :alt="form.name" class="rounded-circle img">
        </div>

        <div class="form-group">
          <label for="image">Upload Image</label>
          <vue-dropzone ref="image" id="image" :options="dropzoneOptions" v-on:vdropzone-success="updateImage"></vue-dropzone>
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
import vueDropzone from 'vue2-dropzone';
import ls from 'local-storage';

export default {
  components: {
    vueDropzone
  },
  data() {
    return {
      api: '',
      token: '',
      form: {
        name: '',
        mimetype: '',
        filename: '',
        originalname: ''
      },
      route: this.$route.matched[0].path,
      dropzoneOptions: this.$http.getDropzoneConfig(
        `${this.$route.matched[0].path}/upload`,
        'post',
        {
          maxFiles: 1,
          acceptedFiles: 'image/*',
          addRemoveLinks: true,
          capture: true
        }
      )
    };
  },
  methods: {
    save() {
      const method = this.$route.params.id ? this.$http.put : this.$http.post;

      method(this.route, this.form).then(response => {
        if (response.data.success) {
          this.$toasted.show('Cadastrado com sucesso!', this.$custom.success);
          this.$router.push(this.route);
        } else {
          this.$toasted.show('Ocorreu um erro!', this.$custom.error);
        }
      });
    },
    updateImage(file, response) {
      this.form.mimetype = response.mimetype;
      this.form.filename = response.filename;
      this.form.originalname = response.originalname;
    },
    getImage() {
      this.$http.get(`${this.route}/image/`);
    }
  },
  beforeMount() {
    this.api = process.env.API_ENV;
    this.token = ls('token');

    if (this.$route.params.id) {
      this.$http
        .get(`${this.route}/${this.$route.params.id}`)
        .then(response => {
          if (response.data) this.form = response.data;
        });
    }
  }
};
</script>

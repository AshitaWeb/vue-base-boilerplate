<template>
  <div class="row">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <router-link
          v-for="(crumb, key) in crumbs"
          :key="crumb.name"
          tag="li"
          :to="{ name: crumb.name, params: $route.params }"
          class="breadcrumb-item"
          :class="{ active: isLast(key) }"
        >
          <a>{{crumb.meta.humanName}}</a>

        </router-link>
      </ol>
    </nav>
  </div>
</template>


<script>

export default {
  name: 'Breadcrumb',
  data() {
    return {
      crumbs: [],
    }
  },
  methods: {
    isLast(key) {
      return this.crumbs.length === key + 1
    }
  },
  beforeMount() {
    this.crumbs = this.$route.matched
  }
}

</script>

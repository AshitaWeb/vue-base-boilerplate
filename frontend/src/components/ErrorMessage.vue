<template>

  <div class="alert alert-danger alert-dismissible" role="alert" v-show="hasError">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
    </button>
    Error, try again.
  </div>

</template>

<script>

  export default {
    name: 'ErrorMessage',
    props:['message','hasError'],
  }

</script>

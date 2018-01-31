<template>

  <div class="alert alert-dismissible" role="alert" v-if="show && !timmedOut ">
    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
    </button> -->
    {{message}}
  </div>

</template>

<script>

  export default {
    name: 'ErrorMessage',
    props:{
      message: String,
      show:Boolean,
      timeout :{
        default:5000
      }    
    },
    data() {
      return {
        timmedOut: false
      }
    },
    watch: {
      '$props':{
        handler: function (props, oldProps) {
          let timeout = false;

          if(props.timeout && props.timeout > 0 ) {
            timeout = props.timeout;
          } else if(!props.timeout) {
            timeout = 5000;
          }

          if (timeout) {
            setTimeout(() => {
              this.timmedOut = true;
            }, timeout);
          } 
        },
        deep: true
      }
    },
  }

</script>

<template lang="pug">
  include app
  +addApp()
</template>

<script>
  import Comment from '../comment/Comment.vue';

  export default {
    data: function () {
      return {
        hide: ""
      }
    },
    components: {
      Comment
    },
    methods: {
      openRewiew() {
        this.hide == "app__rewiew_hide" ? this.hide = "" : this.hide = "app__rewiew_hide"
      }
    }
  }
</script>
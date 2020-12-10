<template lang="pug">
  include app
  +addApp()
</template>

<script>
  import Comment from '../comment/Comment.vue';
  import Rate from '../rate/Rate.vue';
  import ImageLoader from '../image-loader/image-loader.vue';

  export default {
    data: function () {
      return {
        hide: ""
      }
    },
    components: {
      Rate,
      Comment,
      ImageLoader
    },
    methods: {
      openRewiew() {
        this.hide == "app__rewiew_hide" ? this.hide = "" : this.hide = "app__rewiew_hide"
      }
    }
  }
</script>
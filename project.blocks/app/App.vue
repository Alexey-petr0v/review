<template lang="pug">
  include app
  +addApp()
</template>

<script>
  import Comment from '../comment/Comment.vue';
  import Rate from '../rate/Rate.vue';

  export default {
    data: function () {
      return {
        hide: "app__rewiew_hide"
      }
    },
    components: {
      Rate,
      Comment
    },
    methods: {
      openRewiew() {
        this.hide == "app__rewiew_hide" ? this.hide = "" : this.hide = "app__rewiew_hide"
      }
    }
  }
</script>
<template lang="pug">
  include app
  +addApp()
</template>

<script>
  import Comment from '../comment/Comment.vue';

  export default {
    components: {
      Comment
    }
  }
</script>
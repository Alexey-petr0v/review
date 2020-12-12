<template lang="pug">
  include comment
  +addComment
</template>

<script>
  export default {
    props: {
      name: String,
      max: Number
    },
    data: function() {
      return {
        text: "",
      }
    },
    computed: {
      printed: function () {
        this.text.length > this.max ? this.stopPrint() : false;
        this.$emit('comment-result', this.text);
        return this.text.length;
      }
    },
    methods: {
      stopPrint(max) {
        this.text = this.text.substring(0, this.max);
        alert("Максимальное количество символов: "+this.max);
      }
    }
  }
</script>
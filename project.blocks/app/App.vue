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
        rewiewHideFlag: "",
        rewiewSentFlag: "",
        rewiewNextFlag: "",
        rewiewMobileFlag: "",
        mobile_flag: false,
        windowWidth: null,
      }
    },
    components: {
      Rate,
      Comment,
      ImageLoader
    },
    methods: {
      onResize: function () {
        this.windowWidth = window.innerWidth;
        this.rewiewMobileFlag = this.windowWidth < 511 ? "app__rewiew_mobile" : "";
      },
      toggleRewiew: function () {
        this.rewiewHideFlag = this.rewiewHideFlag == "app__rewiew_hide" ?  "" : "app__rewiew_hide"
      },
      toggleNext: function () {
        this.rewiewNextFlag = this.rewiewNextFlag == "app__rewiew_next" ?  "" : "app__rewiew_next"
      },
      send: function () {
        this.rewiewSentFlag = "app__rewiew_sent"
      }
    },
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
  }
</script>
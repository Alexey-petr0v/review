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
        rewiewHideClass: "",
        rewiewSentClass: "",
        rewiewNextClass: "",
        rewiewMobileClass: "",
        windowWidth: null,
        errors: [],
        rate1Value: "3",
        rate2Value: null,
        rate3Value: null,
        rate4Value: null,
        commentValue: "",
        imageLoaderArray: []
      }
    },
    components: {
      Rate,
      Comment,
      ImageLoader
    },
    methods: {
      getRate1Value: function (data) { this.rate1Value = data },
      getRate2Value: function (data) { this.rate2Value = data },
      getRate3Value: function (data) { this.rate3Value = data },
      getRate4Value: function (data) { this.rate4Value = data },
      getCommentValue: function (data) { this.commentValue = data },
      getimageLoaderArray: function (data) { this.imageLoaderArray = data },
      onResize: function () {
        this.windowWidth = window.innerWidth;
        this.rewiewMobileClass = this.windowWidth < 511 ? "app__rewiew_mobile" : "";
      },
      toggleRewiew: function () {
        this.rewiewHideClass = this.rewiewHideClass == "app__rewiew_hide" ?  "" : "app__rewiew_hide";
      },
      toggleNext: function () {
        this.rewiewNextClass = this.rewiewNextClass == "app__rewiew_next" ?  "" : "app__rewiew_next";
      },
      send: function (e) {
      if (this.rate1Value && this.rate2Value && this.rate3Value && this.rate4Value && (this.imageLoaderArray.length !== 0) && (this.commentValue !== "")) {
        this.rewiewSentClass = "app__rewiew_sent";
        return true;
      }

      this.errors = [];

      if (this.commentValue == "") {
        this.errors.push(' напишите комментарий');
      }
      if (!this.rate1Value || !this.rate2Value || !this.rate3Value || !this.rate4Value) {
        this.errors.push(' поставьте оценки');
      }
      if (this.imageLoaderArray.length == 0) {
        this.errors.push(' добавьте фотографии');
      }

      alert("Пожалуйста,"+this.errors)

      e.preventDefault();
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